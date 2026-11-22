package fetch

import (
	"errors"
	"fmt"
	"html"
	"net/url"
	"os"
	"path/filepath"
	"sort"
	"strings"

	"examtopics-downloader/internal/models"
	"github.com/PuerkitoBio/goquery"
)

type QuestionsResult struct {
	Count     int
	Expected  int
	Available int
}

// DownloadQuestions exports the stems and options from the thatonecodes checkpoint and public forum.
// It has its own checkpoint and does not depend on opening the exam catalog.
func DownloadQuestions(provider, slug, stateDir, output string, expected int, cachedOnly bool) (QuestionsResult, error) {
	result := QuestionsResult{Expected: expected}
	if !examSlug.MatchString(provider) || !examSlug.MatchString(slug) || expected < 1 {
		return result, errors.New("provider, exam and a positive expected total are required")
	}
	if filepath.Ext(output) != ".md" {
		return result, errors.New("questions output must be a separate Markdown file")
	}
	if err := os.MkdirAll(stateDir, 0700); err != nil {
		return result, err
	}

	progress := forumProgress{Total: expected, Questions: make(map[string]models.QuestionData)}
	checkpoint := filepath.Join(stateDir, provider+"_"+slug+".questions.json")
	for _, statePath := range []string{filepath.Join(stateDir, provider+"_"+slug+".json"), checkpoint} {
		var prior forumProgress
		if err := loadForumJSON(statePath, &prior); err != nil {
			return result, err
		}
		for link, q := range prior.Questions {
			if discussionURL(link, provider) == link && strings.Contains(link, "-exam-"+slug+"-topic") && usableQuestion(q) {
				progress.Questions[link] = questionWithoutCorrection(q)
			}
		}
	}

	var index forumIndex
	if err := loadForumJSON(filepath.Join(stateDir, provider+"-index.json"), &index); err != nil {
		return result, err
	}
	var scanErr error
	var client *forumHTTP
	if !cachedOnly && len(forumQuestions(progress)) < expected {
		client, scanErr = newForumHTTP(stateDir)
		if scanErr == nil && len(index.Links) == 0 {
			index.Links, scanErr = client.index(provider, stateDir)
		}
	}
	questionKeys := make(map[string]bool)
	for _, q := range progress.Questions {
		questionKeys[questionID(q)] = true
	}
	available := make(map[string]bool)
	for key := range questionKeys {
		available[key] = true
	}
	var candidates []string
	for _, link := range index.Links {
		if discussionURL(link, provider) != link ||
			(!strings.Contains(link, "-exam-"+slug+"-topic-") && !strings.HasSuffix(link, "-exam-"+slug+"-topic/")) {
			continue
		}
		key := link
		if part := numberedDiscussion.FindStringSubmatch(link); part != nil {
			key = part[1] + "/" + part[2]
		}
		available[key] = true
		if _, cached := progress.Questions[link]; !cached && !questionKeys[key] {
			candidates = append(candidates, link)
		}
	}
	result.Available = len(available)
	sort.Strings(candidates)
	if client != nil && scanErr == nil {
		for _, link := range candidates {
			if len(questionKeys) >= expected {
				break
			}
			page, err := client.page(link)
			if err != nil {
				scanErr = err
				break
			}
			q := parseQuestionOnly(page, link)
			if !usableQuestion(*q) {
				if accessNotice.MatchString(page.Find("body").Text()) {
					scanErr = fmt.Errorf("discussion access blocked at %s", link)
					break
				}
				continue
			}
			questionKeys[questionID(*q)] = true
			progress.Questions[link] = questionWithoutCorrection(*q)
			if err := saveForumJSON(checkpoint, progress); err != nil {
				scanErr = err
				break
			}
		}
	}

	items := forumQuestions(progress)
	result.Count = len(items)
	if len(items) == 0 {
		return result, errors.Join(errors.New("no complete stems found"), scanErr)
	}
	if err := writeQuestions(output, items, expected); err != nil {
		return result, errors.Join(err, scanErr)
	}
	return result, scanErr
}

func usableQuestion(q models.QuestionData) bool {
	return q.Title != "" && q.Content != "" && questionID(q) != ""
}

func parseQuestionOnly(page *goquery.Document, link string) *models.QuestionData {
	card := page.Find(".card-text").Not(".question-answer, .answer-description").First()
	page.Find(".question-answer, .answer-description, .voted-answers-tally, .discussion-container, .correct-answer, .most-voted-answer-badge, script, style").Remove()
	page.Find("img[src]").Each(func(_ int, image *goquery.Selection) {
		base, _ := url.Parse(link)
		src, err := base.Parse(image.AttrOr("src", ""))
		if err == nil && src.Scheme == "https" && src.Host != "" && src.User == nil {
			image.BeforeHtml(" [Image](" + html.EscapeString(strings.NewReplacer(")", "%29", "(", "%28").Replace(src.String())) + ") ")
		}
		image.Remove()
	})
	q := parseForumQuestion(page, link)
	if len(q.Questions) < 2 {
		card.Find("br").ReplaceWithHtml("\n")
		q.Content = strings.TrimSpace(card.Text())
	}
	return q
}

func questionWithoutCorrection(q models.QuestionData) models.QuestionData {
	q.Answer, q.Comments = "", ""
	return q
}

func writeQuestions(output string, items []models.QuestionData, expected int) error {
	var md strings.Builder
	for _, q := range items {
		topic, number, _ := strings.Cut(questionID(q), "/")
		fmt.Fprintf(&md, "## %s\n\nQuestion #: %s\nTopic #: %s\n\n%s\n\n%s\n\n[View on ExamTopics](%s)\n\n---\n\n",
			q.Title, number, topic, q.Content, strings.Join(q.Questions, "\n"), q.QuestionLink)
	}
	if len(items) != expected {
		output = strings.TrimSuffix(output, ".md") + ".partial.md"
	}
	file, err := os.CreateTemp(filepath.Dir(output), ".questions-*.md")
	if err != nil {
		return err
	}
	defer os.Remove(file.Name())
	_, writeErr := file.WriteString(md.String())
	if err := errors.Join(writeErr, file.Close()); err != nil {
		return err
	}
	return os.Rename(file.Name(), output)
}
