package fetch

import (
	"fmt"
	"io"
	"net/http"
	"os"
	"path/filepath"
	"reflect"
	"strings"
	"syscall"
	"testing"
	"time"

	"github.com/PuerkitoBio/goquery"
)

type forumTransport func(*http.Request) (*http.Response, error)
func (f forumTransport) RoundTrip(r *http.Request) (*http.Response, error) { return f(r) }

func testResponse(code int, body, retry string) *http.Response {
	response := &http.Response{StatusCode: code, Header: make(http.Header), Body: io.NopCloser(strings.NewReader(body))}
	if retry != "" {
		response.Header.Set("Retry-After", retry)
	}
	return response
}

func TestForumRetryAndCooldown(t *testing.T) {
	dir := t.TempDir()
	var calls int
	h := forumHTTP{cooldownPath: filepath.Join(dir, "cooldown.json")}
	h.client = &http.Client{Transport: forumTransport(func(_ *http.Request) (*http.Response, error) {
		calls++
		switch calls {
		case 1: return testResponse(429, "", "0"), nil
		case 2: return testResponse(200, "<body>ok</body>", ""), nil
		default: return testResponse(429, "", "300"), nil
		}
	})}
	if _, err := h.page(examTopicsOrigin); err != nil || calls != 2 {
		t.Fatalf("expected retry of first request, got %d calls, %v", calls, err)
	}
	if _, err := h.page(examTopicsOrigin); err == nil || calls != 3 {
		t.Fatalf("expected long cooldown after one request, got %d calls, %v", calls, err)
	}
	var next time.Time
	if err := loadForumJSON(h.cooldownPath, &next); err != nil || time.Until(next) < 290*time.Second {
		t.Fatalf("expected persistent cooldown: %v %v", next, err)
	}
	if _, err := h.page(examTopicsOrigin); err == nil || calls != 3 {
		t.Fatalf("cooldown sent another request: %d %v", calls, err)
	}
}

func TestForumResumeAndReuseIndex(t *testing.T) {
	dir := t.TempDir()
	h := forumHTTP{cooldownPath: filepath.Join(dir, "cooldown.json")}
	index := "/discussions/amazon/"
	discussion1 := index+"view/100-exam-example-topic-1-question-1-discussion/"
	discussion2 := index+"view/200-exam-example-topic-1-question-2-discussion/"
	discussionOther := index+"view/300-exam-other-topic-1-question-1-discussion/"
	exam := "/exams/amazon/example/view/"
	otherExam := "/exams/amazon/other/view/"
	available := false
	requests := []string{}
	question := func(number int) string {
		return fmt.Sprintf(`<h1>Exam example topic 1 question %d discussion</h1>
<div class="question-discussion-header">Question #: %d Topic #: 1</div>
<p class="card-text">Example?</p><ul><li class="multi-choice-item">A. First</li><li class="multi-choice-item">B. Second</li></ul>
<span class="correct-answer">AB</span>`, number, number)
	}
	h.client = &http.Client{Transport: forumTransport(func(r *http.Request) (*http.Response, error) {
		requests = append(requests, r.URL.Path)
		switch r.URL.Path {
		case exam: return testResponse(200, "<body>2 Questions &amp; Answers</body>", ""), nil
		case otherExam: return testResponse(200, "<body>1 Questions &amp; Answers</body>", ""), nil
		case index: return testResponse(200, `<div class="discussion-list-page-indicator"><strong>1</strong><strong>2</strong></div><a href="`+discussion1+`">q1</a><a href="`+examTopicsOrigin+discussion1+`">duplicate</a>`, ""), nil
		case index+"2/":
			if !available {
				return testResponse(403, "", ""), nil
			}
			return testResponse(200, `<a href="`+discussion2+`">q2</a><a href="`+discussionOther+`">another exam</a>`, ""), nil
		case discussion1, discussionOther: return testResponse(200, question(1), ""), nil
		case discussion2: return testResponse(200, question(2), ""), nil
		default: return nil, fmt.Errorf("unexpected request: %s", r.URL)
		}
	})}
	out := filepath.Join(dir, "out.md")
	if _, err := h.download("amazon", "example", dir, out); err == nil || !strings.Contains(err.Error(), "HTTP 403") {
		t.Fatalf("expected incomplete index, got %v", err)
	}
	if _, err := os.Stat(out); !os.IsNotExist(err) {
		t.Fatalf("partial result published: %v", err)
	}
	requests = nil
	available = true
	if count, err := h.download("amazon", "example", dir, out); count != 2 || err != nil {
		t.Fatalf("expected full download, got %d %v", count, err)
	}
	if !reflect.DeepEqual(requests, []string{exam, index+"2/", discussion1, discussion2}) {
		t.Fatalf("did not resume or deduplicate: %v", requests)
	}
	markdown, err := os.ReadFile(out)
	if err != nil || strings.Count(string(markdown), "**Answer: AB**") != 2 {
		t.Fatalf("multi-answer output unavailable: %v", err)
	}
	requests = nil
	if count, err := h.download("amazon", "other", dir, out); count != 1 || err != nil {
		t.Fatalf("unexpected second exam result: %d %v", count, err)
	}
	if !reflect.DeepEqual(requests, []string{otherExam, discussionOther}) {
		t.Fatalf("did not reuse the Amazon index: %v", requests)
	}
}

func TestCanonicalForumPage(t *testing.T) {
	base := examTopicsOrigin + "/discussions/amazon/2"
	if got := canonicalPageURL(base, "/discussions/amazon/2/"); got != base+"/" {
		t.Fatalf("canonical path rejected: %q", got)
	}
	for _, redirect := range []string{"/login/", "https://example.org/discussions/amazon/2/"} {
		if got := canonicalPageURL(base, redirect); got != "" {
			t.Fatalf("followed unrelated redirect: %q", got)
		}
	}
}

func TestTextOnlyDiscussionChoices(t *testing.T) {
	for _, tc := range []struct{ footer, answer string }{
		{"Suggested Answer: B, D", "BD"},
		{"Suggested Answer", ""},
	} {
		html := "<h1>Exam sample topic 1 question 3 discussion</h1>" +
			"<p class='card-text'>Question text?<br><br>A. First<br>B. Second<br>still second<br>C. Third<br>D. Fourth<br><br>" +
			tc.footer + "</p>"
		doc, err := goquery.NewDocumentFromReader(strings.NewReader(html))
		if err != nil {
			t.Fatal(err)
		}
		item := parseForumQuestion(doc, "")
		want := []string{"A. First", "B. Second still second", "C. Third", "D. Fourth"}
		if !reflect.DeepEqual(item.Questions, want) || item.Content != "Question text?" || item.Answer != tc.answer {
			t.Fatalf("unexpected text-only parsing: %+v", item)
		}
	}
}

func TestForumRetriesResetWithoutRetryingForbidden(t *testing.T) {
	calls := 0
	h := forumHTTP{client: &http.Client{Transport: forumTransport(func(_ *http.Request) (*http.Response, error) {
		calls++
		switch calls {
		case 1:
			return nil, syscall.ECONNRESET
		case 2:
			return testResponse(200, "<body>ok</body>", ""), nil
		default:
			return testResponse(403, "", ""), nil
		}
	})}}
	if _, err := h.page(examTopicsOrigin); err != nil || calls != 2 {
		t.Fatalf("expected retry after reset, got %d calls, %v", calls, err)
	}
	if _, err := h.page(examTopicsOrigin); err == nil || calls != 3 {
		t.Fatalf("expected immediate stop on forbidden, got %d calls, %v", calls, err)
	}
}
