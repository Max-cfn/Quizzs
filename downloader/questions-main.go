package main

import (
	"flag"
	"fmt"
	"log"

	"examtopics-downloader/internal/fetch"
)

func main() {
	provider := flag.String("p", "", "Exam provider")
	exam := flag.String("s", "", "Exact exam slug")
	state := flag.String("state", "/state", "Checkpoint directory")
	output := flag.String("o", "/state/questions-only.md", "Standalone Markdown output")
	total := flag.Int("total", 0, "Expected number of distinct questions")
	cachedOnly := flag.Bool("cached-only", false, "Read saved questions without making HTTP requests")
	flag.Parse()

	result, err := fetch.DownloadQuestions(*provider, *exam, *state, *output, *total, *cachedOnly)
	fmt.Printf("Coverage: %d/%d questions, %d indexed\n", result.Count, result.Expected, result.Available)
	if err != nil {
		log.Fatal(err)
	}
	if result.Count != result.Expected {
		log.Fatal("incomplete collection; output has the .partial.md suffix")
	}
}
