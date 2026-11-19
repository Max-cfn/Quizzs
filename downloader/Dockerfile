FROM golang:1.24-bookworm AS build
WORKDIR /src
RUN git init && git remote add origin https://github.com/thatonecodes/examtopics-downloader.git && \
    git fetch --depth 1 origin cc064ad775d364706ba550909c83d853d830e297 && git checkout --detach FETCH_HEAD
COPY downloader.patch ./
RUN git apply downloader.patch && mkdir -p cmd/quizzs
COPY forum.go internal/fetch/quizzs_forum.go
COPY main.go cmd/quizzs/main.go
RUN go build -o /forum-downloader ./cmd/quizzs

FROM debian:bookworm-slim
RUN apt-get update && apt-get install -y --no-install-recommends ca-certificates && rm -rf /var/lib/apt/lists/*
COPY --from=build /forum-downloader /usr/local/bin/forum-downloader
ENTRYPOINT ["/usr/local/bin/forum-downloader"]
