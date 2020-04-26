package processsharedstate

type dbtrans struct {
}

type dbTransInterface interface {
	// first interface is for the query
	// second interface is for the query parameters
	// thirds is for any settings
	Query(interface{}, interface{}, ...interface{}) (*Resulter, error)
	//todo
	RollBack()
	//todo
	Commit()
}

type Resulter interface {
	//return an interface of the objects value
	Results(...interface{}) error
}
