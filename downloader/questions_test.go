package fetch

import (
	"os"
	"path/filepath"
	"strings"
	"testing"

	"examtopics-downloader/internal/models"
	"github.com/PuerkitoBio/goquery"
)

func TestQuestionsOnlyExport(t *testing.T) {
	dir := t.TempDir()
	link := examTopicsOrigin + "/discussions/amazon/view/100-exam-example-topic-1-question-1-discussion/"
	duplicate := examTopicsOrigin + "/discussions/amazon/view/200-exam-example-topic-1-question-1-discussion/"
	unavailable := examTopicsOrigin + "/discussions/amazon/view/300-exam-example-topic-1-question-2-discussion/"
	q := models.QuestionData{
		Title: "Exam example topic 1 question 1 discussion", Content: "A question?",
		Questions: []string{"A. First", "B. Second"}, Answer: "A",
		Comments: "community text", QuestionLink: link,
	}
	source := filepath.Join(dir, "amazon_example.json")
	if err := saveForumJSON(source, forumProgress{Total: 2, Questions: map[string]models.QuestionData{link: q, duplicate: q}}); err != nil {
		t.Fatal(err)
	}
	if err := saveForumJSON(filepath.Join(dir, "amazon-index.json"), forumIndex{Links: []string{link, duplicate, unavailable}}); err != nil {
		t.Fatal(err)
	}
	output := filepath.Join(dir, "questions.md")
	if err := os.WriteFile(output, []byte("existing file"), 0600); err != nil {
		t.Fatal(err)
	}
	result, err := DownloadQuestions("amazon", "example", dir, output, 2, true)
	if err != nil || result != (QuestionsResult{Count: 1, Expected: 2, Available: 2}) {
		t.Fatalf("unexpected extraction: %+v %v", result, err)
	}
	data, err := os.ReadFile(filepath.Join(dir, "questions.partial.md"))
	if err != nil || !strings.Contains(string(data), "A question?\n\nA. First\nB. Second") ||
		strings.Contains(string(data), "**Answer:") || strings.Contains(string(data), "community text") {
		t.Fatalf("unexpected Markdown: %q %v", data, err)
	}
	original, err := os.ReadFile(output)
	if err != nil || string(original) != "existing file" {
		t.Fatalf("partial run overwrote the complete output: %q %v", original, err)
	}
}

func TestQuestionsOnlyKeepsIllustratedHotspot(t *testing.T) {
	doc, err := goquery.NewDocumentFromReader(strings.NewReader(
		`<h1>Exam example topic 1 question 2 discussion</h1>
		<p class="card-text">Order these steps<br><img src="/assets/steps.png"></p>
		<p class="card-text question-answer"><img src="/assets/solution.png"></p>
		<div class="discussion-container">Comment</div>`))
	if err != nil {
		t.Fatal(err)
	}
	q := parseQuestionOnly(doc, examTopicsOrigin+"/discussions/amazon/view/200-exam-example-topic-1-question-2-discussion/")
	if !usableQuestion(*q) || !strings.Contains(q.Content, "/assets/steps.png") || strings.Contains(q.Content, "solution.png") {
		t.Fatalf("hotspot without the solution expected: %+v", q)
	}
}
