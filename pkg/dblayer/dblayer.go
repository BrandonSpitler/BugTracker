package dblayer

import (
	"log"
)

type Database struct {
	DatabaseName string
	DatabaseType string
	DbActions    DatabaseActions
}

type QueryParams struct {
	Query    string
	Database string
}

type Connector interface {
	Connect(cnfgFile string) (Database, error)
}

var registeredDatabasesServers = make(map[string]Database)
var registeredDataBaseTypes = make(map[string]Connector)

type QueryErrorHandle interface {
	QueryErrorHandle()
}

func RegisterDataBaseType(Type string, dbConnector Connector) {
	if Type == "" {
		log.Fatal("Can not have type of nothing")
	}
	_, ok := registeredDataBaseTypes[Type]
	if ok {
		log.Fatal("database type", Type, "already exists")
	}
}

// todo split these interfaces out
type DatabaseActions interface {
	Query(QueryParams, ...QueryErrorHandle)
	Commit(...QueryErrorHandle)
	Rollback()
	QueueQuery(QueryParams, ...QueryErrorHandle)
}

func DatabaseFactory(databaseCnfgFile string, serverName string, dbType string) (Database, error) {
	if serverName == "" || databaseCnfgFile == "" {
		log.Fatal("server name:", serverName, " or database config file: ", databaseCnfgFile, "should not be nothing")
	}

	_, ok := registeredDatabasesServers[serverName]
	if ok {
		log.Fatal("server with the server name", serverName, "already exists")
	}

	server, ok := registeredDataBaseTypes[dbType]
	if !ok {
		log.Fatal("database of type", dbType, "is not registered")
	}

	db, err := server.Connect(databaseCnfgFile)
	if err == nil {
		registeredDatabasesServers[serverName] = db
	}
	return db, err
}
