package dblayer

import (
	"log"
)

type Database struct {
	DatabaseName string
	DatabaseType int
	dbActions    databaseActions
}

type QueryParams struct {
	Query    string
	Database string
}

var registeredDatabasesServers = make(map[string]Database)

type server interface {
	Connect(cnfgFile string) (Database, error)
}

type QueryErrorHandle interface {
	QueryErrorHandle()
}

// todo split these interfaces out
type databaseActions interface {
	Query(QueryParams, ...QueryErrorHandle)
	Commit(...QueryErrorHandle)
	Rollback()
	QueueQuery(QueryParams, ...QueryErrorHandle)
}

func DatabaseFactory(databaseCnfgFile string, serverName string, server server) (Database, error) {
	if serverName == "" || databaseCnfgFile == "" {
		log.Fatal("server name:", serverName, " or database config file: ", databaseCnfgFile, "should not be nothing")
	}

	_, ok := registeredDatabasesServers[serverName]
	if ok {
		log.Fatal("server with the server name", serverName, "already exists")
	}
	db, err := server.Connect(databaseCnfgFile)
	if err == nil {
		registeredDatabasesServers[serverName] = db
	}
	return db, err
}
