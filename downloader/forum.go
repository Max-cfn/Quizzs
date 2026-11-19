package fetch

import (
	"encoding/json"
	"errors"
	"fmt"
	"net/http"
	"net/url"
	"os"
	"path/filepath"
	"regexp"
	"sort"
	"strconv"
	"strings"
	"time"

	"examtopics-downloader/internal/models"
	"examtopics-downloader/internal/utils"

	"github.com/PuerkitoBio/goquery"
)

const examTopicsOrigin = "https://www.examtopics.com"
const indexLifetime = 24 * time.Hour

var examSlug = regexp.MustCompile(`^[a-z0-9-]{1,180}$`)
var advertisedCount = regexp.MustCompile(`(?i)([\d,]+)\s+questions\s*(?:&|and)\s*answers`)
var questionNumber = regexp.MustCompile(`(?i)question\s*#?\s*:?\s*(\d+)`)
var topicNumber = regexp.MustCompile(`(?i)topic\s*#?\s*:?\s*(\d+)`)
var answerLetters = regexp.MustCompile(`^[A-H]+$`)
var optionLine = regexp.MustCompile(`^([A-H])[.):]\s+(.+)$`)
var inlineAnswer = regexp.MustCompile(`(?i)^(?:suggested|correct) answer\s*:\s*([A-H](?:[ ,]*[A-H])*)\s*$`)
var accessNotice = regexp.MustCompile(`(?i)log in to continue|this section is not available anymore|verify you are human|contributor access required`)

type forumHTTP struct {
	client *http.Client
	interval time.Duration
	retryDelay time.Duration
	next time.Time
	cooldownPath string
}

func retryAt(value string, now time.Time, fallback time.Duration) time.Time {
	if seconds, err := strconv.ParseUint(value, 10, 32); err == nil {
		return now.Add(time.Duration(seconds) * time.Second)
	}
	if date, err := http.ParseTime(value); err == nil {
		return date
	}
	return now.Add(fallback)
}

func (h *forumHTTP) page(pageURL string) (*goquery.Document, error) {
	redirected := false
	for attempt := 0; attempt < 2; {
		if delay := time.Until(h.next); delay > 0 {
			if delay > 60*time.Second {
				return nil, fmt.Errorf("cooldown until %s", h.next.UTC().Format(time.RFC3339))
			}
			time.Sleep(delay)
		}
		h.next = time.Now().Add(h.interval)
		res, err := h.client.Get(pageURL)
		if err != nil {
			return nil, err
		}
		if res.StatusCode == http.StatusOK {
			document, err := goquery.NewDocumentFromReader(res.Body)
			res.Body.Close()
			return document, err
		}
		res.Body.Close()
		if !redirected && (res.StatusCode == http.StatusMovedPermanently || res.StatusCode == http.StatusPermanentRedirect) {
			if canonical := canonicalPageURL(pageURL, res.Header.Get("Location")); canonical != "" {
				pageURL, redirected = canonical, true
				continue
			}
		}
		if res.StatusCode != http.StatusTooManyRequests && res.StatusCode != http.StatusServiceUnavailable {
			return nil, fmt.Errorf("HTTP %d at %s", res.StatusCode, pageURL)
		}
		deadline := retryAt(res.Header.Get("Retry-After"), time.Now(), h.retryDelay)
		if deadline.After(h.next) {
			h.next = deadline
		}
		if err := saveForumJSON(h.cooldownPath, h.next); err != nil {
			return nil, err
		}
		fmt.Printf("HTTP %d at %s · resume at %s\n", res.StatusCode, pageURL, h.next.UTC().Format(time.RFC3339))
		attempt++
		if attempt == 2 || time.Until(h.next) > 60*time.Second {
			return nil, fmt.Errorf("HTTP %d at %s · resume at %s", res.StatusCode, pageURL, h.next.UTC().Format(time.RFC3339))
		}
	}
	return nil, errors.New("request attempts exhausted")
}

func canonicalPageURL(current, location string) string {
	base, err := url.Parse(current)
	if err != nil || location == "" {
		return ""
	}
	target, err := base.Parse(location)
	if err != nil || target.Scheme != base.Scheme || target.Host != base.Host || target.User != nil ||
		target.RawQuery != base.RawQuery || strings.TrimSuffix(target.Path, "/") != strings.TrimSuffix(base.Path, "/") {
		return ""
	}
	target.Fragment = ""
	if target.String() == base.String() {
		return ""
	}
	return target.String()
}

type forumIndex struct {
	PageCount int
	NextPage int
	Links []string
	CompletedAt time.Time
}

type forumProgress struct {
	Total int
	Questions map[string]models.QuestionData
}

func loadForumJSON(path string, value any) error {
	data, err := os.ReadFile(path)
	if errors.Is(err, os.ErrNotExist) {
		return nil
	}
	if err != nil {
		return err
	}
	if err := json.Unmarshal(data, value); err != nil {
		return fmt.Errorf("invalid checkpoint %s: %w", filepath.Base(path), err)
	}
	return nil
}

func saveForumJSON(path string, value any) error {
	data, err := json.Marshal(value)
	if err != nil {
		return err
	}
	if err := os.WriteFile(path+".tmp", data, 0600); err != nil {
		return err
	}
	return os.Rename(path+".tmp", path)
}

func discussionURL(href, provider string) string {
	base, _ := url.Parse(examTopicsOrigin)
	link, err := base.Parse(href)
	if err != nil || link.Scheme != "https" || link.Host != base.Host || link.User != nil ||
		!strings.HasPrefix(link.Path, "/discussions/"+provider+"/view/") {
		return ""
	}
	link.RawQuery, link.Fragment = "", ""
	link.Path = strings.TrimSuffix(link.Path, "/") + "/"
	return link.String()
}

func (h *forumHTTP) index(provider, stateDir string) ([]string, error) {
	path := filepath.Join(stateDir, provider+"-index.json")
	var state forumIndex
	if err := loadForumJSON(path, &state); err != nil {
		return nil, err
	}
	if !state.CompletedAt.IsZero() {
		if time.Since(state.CompletedAt) < indexLifetime {
			return state.Links, nil
		}
		state = forumIndex{}
	}
	indexURL := examTopicsOrigin+"/discussions/"+provider+"/"
	var first *goquery.Document
	if state.PageCount == 0 {
		doc, err := h.page(indexURL)
		if err != nil {
			return nil, err
		}
		first = doc
		state.PageCount, _ = strconv.Atoi(strings.TrimSpace(doc.Find(".discussion-list-page-indicator strong").Eq(1).Text()))
		state.NextPage = 1
		if state.PageCount == 0 {
			return nil, fmt.Errorf("forum pagination unavailable at %s", indexURL)
		}
		if err := saveForumJSON(path, state); err != nil {
			return nil, err
		}
	}
	for page := state.NextPage; page <= state.PageCount; page++ {
		pageURL := indexURL
		if page > 1 {
			pageURL += strconv.Itoa(page) + "/"
		}
		doc := first
		var err error
		if page != 1 || first == nil {
			doc, err = h.page(pageURL)
		}
		if err != nil {
			return nil, fmt.Errorf("index %d/%d: %w", page-1, state.PageCount, err)
		}
		var links []string
		doc.Find("a[href]").Each(func(_ int, a *goquery.Selection) {
			if link := discussionURL(a.AttrOr("href", ""), provider); link != "" {
				links = append(links, link)
			}
		})
		if len(links) == 0 {
			return nil, fmt.Errorf("index %d/%d: no discussion links at %s", page-1, state.PageCount, pageURL)
		}
		state.Links = utils.DeduplicateLinks(append(state.Links, links...))
		state.NextPage = page+1
		if err := saveForumJSON(path, state); err != nil {
			return nil, err
		}
		fmt.Printf("Index %s: %d/%d pages\n", provider, page, state.PageCount)
	}
	state.CompletedAt = time.Now()
	return state.Links, saveForumJSON(path, state)
}

func questionID(item models.QuestionData) string {
	header := item.Title+" "+item.Header
	question := questionNumber.FindStringSubmatch(header)
	topic := topicNumber.FindStringSubmatch(header)
	if len(question) == 0 || len(topic) == 0 {
		return ""
	}
	return topic[1]+"/"+question[1]
}

func forumQuestions(progress forumProgress) []models.QuestionData {
	unique := make(map[string]models.QuestionData)
	links := make([]string, 0, len(progress.Questions))
	for link := range progress.Questions {
		links = append(links, link)
	}
	sort.Strings(links)
	for _, link := range links {
		item := progress.Questions[link]
		if key := questionID(item); key != "" {
			if _, found := unique[key]; !found {
				unique[key] = item
			}
		}
	}
	keys := make([]string, 0, len(unique))
	for key := range unique {
		keys = append(keys, key)
	}
	sort.Slice(keys, func(i, j int) bool {
		a := strings.Split(keys[i], "/")
		b := strings.Split(keys[j], "/")
		for k := range a {
			x, _ := strconv.Atoi(a[k])
			y, _ := strconv.Atoi(b[k])
			if x != y {
				return x < y
			}
		}
		return keys[i] < keys[j]
	})
	items := make([]models.QuestionData, 0, len(keys))
	for _, key := range keys {
		items = append(items, unique[key])
	}
	return items
}

// Forum questions can present options as text separated by <br> rather than list items.
func parseForumQuestion(doc *goquery.Document, link string) *models.QuestionData {
	question := parseDiscussion(doc, link)
	if len(question.Questions) >= 2 {
		return question
	}
	card := doc.Find(".card-text").First().Clone()
	card.Find("script, style").Remove()
	card.Find("br").ReplaceWithHtml("\n")
	var stem, options []string
	for _, raw := range strings.Split(card.Text(), "\n") {
		line := strings.Join(strings.Fields(raw), " ")
		if line == "" {
			continue
		}
		if answer := inlineAnswer.FindStringSubmatch(line); answer != nil {
			question.Answer = strings.ToUpper(strings.NewReplacer(" ", "", ",", "").Replace(answer[1]))
			break
		}
		lower := strings.ToLower(line)
		if strings.HasPrefix(lower, "suggested answer") || strings.HasPrefix(lower, "correct answer") {
			break
		}
		if parts := optionLine.FindStringSubmatch(line); parts != nil && parts[1][0] == byte('A'+len(options)) {
			options = append(options, parts[1]+". "+parts[2])
		} else if len(options) == 0 {
			stem = append(stem, line)
		} else {
			options[len(options)-1] += " " + line
		}
	}
	if len(options) >= 2 && len(stem) > 0 {
		question.Content = strings.Join(stem, "\n")
		question.Questions = options
	}
	return question
}

// DownloadForum uses the upstream discussion parser with a single resumable request queue.
func DownloadForum(provider, slug, stateDir, output string) (int, error) {
	if !examSlug.MatchString(provider) || !examSlug.MatchString(slug) {
		return 0, errors.New("invalid provider or exam")
	}
	if err := os.MkdirAll(stateDir, 0700); err != nil {
		return 0, err
	}
	httpClient := utils.NewHTTPClient()
	httpClient.CheckRedirect = func(_ *http.Request, _ []*http.Request) error {
		return http.ErrUseLastResponse
	}
	h := forumHTTP{client: httpClient, interval: 6*time.Second, retryDelay: 30*time.Second, cooldownPath: filepath.Join(stateDir, "cooldown.json")}
	if err := loadForumJSON(h.cooldownPath, &h.next); err != nil {
		return 0, err
	}
	return h.download(provider, slug, stateDir, output)
}

func (h *forumHTTP) download(provider, slug, stateDir, output string) (int, error) {
	progress := forumProgress{Questions: make(map[string]models.QuestionData)}
	progressPath := filepath.Join(stateDir, provider+"_"+slug+".json")
	if err := loadForumJSON(progressPath, &progress); err != nil {
		return 0, err
	}
	doc, err := h.page(examTopicsOrigin+"/exams/"+provider+"/"+slug+"/view/")
	if err != nil {
		return 0, err
	}
	heading := advertisedCount.FindStringSubmatch(doc.Find("body").Text())
	if len(heading) == 0 {
		return 0, errors.New("advertised exam count unavailable")
	}
	total, _ := strconv.Atoi(strings.ReplaceAll(heading[1], ",", ""))
	if total < 1 {
		return 0, errors.New("invalid advertised exam count")
	}
	if progress.Total != total {
		progress = forumProgress{Total: total, Questions: make(map[string]models.QuestionData)}
	}
	index, err := h.index(provider, stateDir)
	if err != nil {
		return 0, err
	}
	var blocked int
	for _, link := range index {
		if discussionURL(link, provider) != link {
			return 0, errors.New("invalid saved discussion URL")
		}
		if !strings.Contains(link, "-exam-"+slug+"-topic-") && !strings.HasSuffix(link, "-exam-"+slug+"-topic/") {
			continue
		}
		if _, done := progress.Questions[link]; done {
			continue
		}
		page, err := h.page(link)
		if err != nil {
			return 0, err
		}
		question := parseForumQuestion(page, link)
		if len(question.Questions) < 2 || questionID(*question) == "" || question.Content == "" {
			if accessNotice.MatchString(page.Find("body").Text()) {
				return 0, fmt.Errorf("discussion access blocked at %s", link)
			}
			blocked++
			fmt.Printf("Discussion without a complete question: %s\n", link)
			continue
		}
		if !answerLetters.MatchString(question.Answer) {
			question.Answer = ""
		}
		progress.Questions[link] = *question
		if err := saveForumJSON(progressPath, progress); err != nil {
			return 0, err
		}
		fmt.Printf("Questions %s: %d/%d\n", slug, len(forumQuestions(progress)), total)
	}
	items := forumQuestions(progress)
	if len(items) != total {
		return 0, fmt.Errorf("incomplete exam: %d/%d questions, %d discussions without a complete question", len(items), total, blocked)
	}
	var corrected int
	for _, item := range items {
		if item.Answer != "" {
			corrected++
		}
	}
	fmt.Printf("Coverage: %d/%d questions, %d explicit answers\n", len(items), total, corrected)
	utils.WriteData(items, output, true, "md")
	return total, nil
}
