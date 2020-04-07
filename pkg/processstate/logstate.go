package processsharedstate

import (
	"log"
	"os"
	"sync"
)

type logState struct {
	*log.Logger
	fileName string
}

var logger *logState

var once sync.Once

func GetInstanace() *logState {
	once.Do(func() {
		logger = createLogger("ProgramLog.log")
	})
	return logger
}

func createLogger(fileName string) *logState {
	file, _ := os.OpenFile(fileName, os.O_RDWR|os.O_CREATE|os.O_TRUNC, 0777)
	return &logState{
		fileName: fileName,
		Logger:   log.New(file, "Logger ", log.Lshortfile),
	}
}
