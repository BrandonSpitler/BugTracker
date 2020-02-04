package main

import (
	bugtrackerserver "BugTracker/BugTrackBackend/src/bugtackerserver/API"
	"flag"
	"net/http"
	"strings"
)

func main() {
	var port string
	o := flag.String("o", "a", "Operation: a for runing only the api of the webserver")
	flag.Parse()
	http.HandleFunc("/API/", bugtrackerserver.APIHandler)
	switch strings.ToLower(*o) {
	case "a":
		port = ":8081"
	default:
		//todo webserver config
		port = ":8081"
		fs := http.FileServer(http.Dir("/"))
		http.Handle("/", fs)
	}
	http.ListenAndServe(":"+port, nil)
}
