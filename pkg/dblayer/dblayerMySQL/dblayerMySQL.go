package dblayer

import (
	"database/sql"
	"log"
)

type MySQL struct {
	DB        string `json:"database"`
	dbSession *sql.DB
	Password  string `json:"password"`
	URL       string `json:"url"`
	Port      string `json:"port"`
	User      string `user:"user"`
}

func (this MySQL) Connect() {
	dbSession, err := sql.Open("mysql", this.createConnString())
	if err != nil {
		log.Fatal("Could not access database", this.DB, "at url", this.URL, "and port", this.Port, "and user", this.User)
	}
	this.dbSession = dbSession
}

func (this MySQL) Query() {

}

func (this MySQL) Commit() {

}

func (this MySQL) RollBack() {

}

func (this MySQL) createConnString() string {
	return this.User + ":" + this.Password + "@tcp(" + this.URL +
		":" + this.Port + ")/" + this.DB + "?parseTime=true"
}
