package processsharedstate

type dbState struct {
}

type dbInterface interface {
	// first interface is for the query
	// second interface is for the query parameters
	// thirds is for any settings
	Query(interface{}, interface{}, ...interface{}) (*rows, error)
	//todo
	RollBack()
	//todo
	Commit()
}

type rows interface {
	//return an interface of the objects value
	Results(...interface{}) error
}
