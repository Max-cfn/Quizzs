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
	output := flag.String("o", "/state/result.md", "Markdown output")
	flag.Parse()
	count, err := fetch.DownloadForum(*provider, *exam, *state, *output)
	if err != nil {
		log.Fatal(err)
	}
	fmt.Printf("Complete: %d questions\n", count)
}
