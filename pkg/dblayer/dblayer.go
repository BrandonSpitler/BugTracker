package dblayer

type Database struct {
	DatabaseName string
	DatabaseType int
}

var registeredDatabases = make(map[string]Database)

type dblayer interface {
	connect(cnfgFile string) error
}
