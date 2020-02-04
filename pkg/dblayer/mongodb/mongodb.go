package mongodb

import (
	_ "bugtrackercngfloader"
	"errors"
	"fmt"

	"gopkg.in/mgo.v2"
)

type MongoDB struct {
	MongoDBSession mgo.Session
	URL            string `json:"URL"`
	Port           string `json:"Port"`
	DB             string `json:Database`
}

func connect(cnfgFile string) (*MongoDB, error) {
	mongo := new(MongoDB)
	LoadJsonConfiguration(mongo, cnfgFile)

	db, err := mgo.Dial(conn)
	if err != nil {
		return mongo, err
	}
}

func (m MongoDB) createConnStrng() (string, error) {
	if m.URL == "" {
		return "", errors.New("URL is nothing")
	}
	if m.Port == "" {
		return "", errors.New("Port is nothing")
	}
	return fmt.Sprintf("mongodb://%s:%s", m.URL, m.Port), nil
}
