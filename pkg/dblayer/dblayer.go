package dblayer

import (
	"fmt"
	"log"
)

type Database struct {
	DbActions DatabaseActions
}

type QueryParams struct {
	Query    string
	Database string
}

type Connector interface {
	Connect() (DatabaseActions, error)
}

var registeredDatabasesServers = make(map[string]*DatabaseActions)
var registeredDataBaseTypes = make(map[string]Connector)

type QueryErrorHandle interface {
	QueryErrorHandle()
}

func registerDatabaseServer(Name string, dbActions DatabaseActions) {
	if Name == "" {
		log.Fatal("Can not have Name of nothing")
	}
	_, ok := registeredDatabasesServers[Name]
	if ok {
		log.Fatal("database Named", Name, "already exists")
	}
	registeredDatabasesServers[Name] = new(DatabaseActions)
}

func GetDataBaseServer(Name string) (*DatabaseActions, error) {
	databaseActions, ok := registeredDatabasesServers[Name]

	if !ok {
		return nil, fmt.Errorf("database not found %s", Name)
	}
	return databaseActions, nil
}

type DatabaseActions interface {
	Query(Results *[]interface{},
		Query interface{}) (err error)
	Commit()
	Rollback()
}
