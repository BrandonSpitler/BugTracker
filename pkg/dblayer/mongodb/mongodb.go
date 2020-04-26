package dblayer

import (
	"errors"
	"fmt"
	"github.com/brandonspitler/bug-tracker/pkg/configloader"
	"gopkg.in/mgo.v2"
)

type MongoDB struct {
	MongoDBSession *mgo.Session
	URL            string `json:"URL"`
	Port           string `json:"Port"`
	DB             string `json:"Database`
}

var MongoDBType string = "Mongo";

func connect(cnfgFile string) (*MongoDB, error) {
	mongo := new(MongoDB)
	configloader.LoadJsonConfiguration(&mongo, cnfgFile)
	conn, err := mongo.createConnString()
	if err != nil {
		return nil, err
	}
	// todo research Dial
	mongo.MongoDBSession, err = mgo.Dial(conn)

	return mongo, err

}

func (m MongoDB) createConnString() (string, error) {
	if m.URL == "" {
		return "", errors.New("URL is nothing")
	}
	if m.Port == "" {
		return "", errors.New("Port is nothing")
	}
	return fmt.Sprintf("mongodb://%s:%s", m.URL, m.Port), nil
}

func init() {

}