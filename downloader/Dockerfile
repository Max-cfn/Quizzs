FROM golang:1.24-bookworm AS build
WORKDIR /src
RUN git init && git remote add origin https://github.com/thatonecodes/examtopics-downloader.git && \
    git fetch --depth 1 origin cc064ad775d364706ba550909c83d853d830e297 && git checkout --detach FETCH_HEAD
COPY downloader.patch ./
RUN git apply downloader.patch && mkdir -p cmd/quizzs cmd/quizzs-questions
COPY forum.go internal/fetch/quizzs_forum.go
COPY main.go cmd/quizzs/main.go
COPY questions.go internal/fetch/quizzs_questions.go
COPY questions-main.go cmd/quizzs-questions/main.go
RUN go build -o /forum-downloader ./cmd/quizzs && \
    go build -o /questions-downloader ./cmd/quizzs-questions

FROM debian:bookworm-slim
RUN apt-get update && apt-get install -y --no-install-recommends ca-certificates && rm -rf /var/lib/apt/lists/*
COPY --from=build /forum-downloader /usr/local/bin/forum-downloader
COPY --from=build /questions-downloader /usr/local/bin/questions-downloader
ENTRYPOINT ["/usr/local/bin/forum-downloader"]
