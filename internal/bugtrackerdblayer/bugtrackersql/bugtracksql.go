package bugtrackersql

type BugTrackerSql struct {
}

type BugTrackerSQLQuerySettings struct {
}

func (this *BugTrackerSql) Query(query string,
	parameters []interface{},
	setting BugTrackerSQLQuerySettings,
	Results []interface{}) (err error) {
	// rows, err := db.Query(query, parameters)
	return nil
}

// todo
func (this *BugTrackerSql) RollBack() {

}

// todo
func (this *BugTrackerSql) Commit() {

}
