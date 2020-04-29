package dblayer

import (
	"context"
	"database/sql"
	"fmt"
	"log"
	"reflect"
	"strings"

	"github.com/brandonspitler/bug-tracker/pkg/configloader"
)

type MySQL struct {
	DB        string `json:"database"`
	dbSession *sql.DB
	Password  string `json:"password"`
	URL       string `json:"url"`
	Port      string `json:"port"`
	User      string `user:"user"`
}

type QueryParameters struct {
	Query   string
	Args    []interface{}
	Context context.Context
}

type BasicResultsMapper struct {
	columnValuesMapped []interface{}
	columnNameToIndex  map[string]int
	model              interface{}
}

func (this *BasicResultsMapper) SetModel(model interface{}) {
	this.model = model
}

func (this *BasicResultsMapper) resultsMap(ColumnNameToIndex map[string]int, ColumnValues []interface{}) error {
	if this.columnValuesMapped == nil {
		this.columnValuesMapped = make([]interface{}, 0)
	}
	Type := reflect.TypeOf(this.model)
	columnValue := reflect.New(reflect.TypeOf(this.model))
	for i := 0; i < columnValue.NumField(); i++ {
		sqlColumName := strings.Split(Type.Field(i).Tag.Get("SQLColumn"), ",")[0]
		ColumnIndex, ok := ColumnNameToIndex[sqlColumName]
		if ok {
			Cell := ColumnValues[ColumnIndex]
			switch columnValue.Field(i).Kind() {
			case reflect.String:
				columnValue.Field(i).SetString(string(Cell.([]uint8)))
			case reflect.Float32, reflect.Float64:
				columnValue.Field(i).SetFloat(Cell.(float64))
			case reflect.Ptr:
				if reflect.ValueOf(Cell).Kind() == reflect.Bool {
					itemBool := Cell.(bool)
					columnValue.Field(i).Set(reflect.ValueOf(&itemBool))
				}
			case reflect.Struct:
				columnValue.Field(i).Set(reflect.ValueOf(Cell))
			default:
				fmt.Errorf("Cell Pointer Type does not exists")
			}
			this.columnValuesMapped = append(this.columnValuesMapped, Cell)
		}
	}
	return nil
}

type resultsMapper interface {
	resultsMap(map[string]int, []interface{}) error
}

func (this MySQL) Connect() {
	dbSession, err := sql.Open("mysql", this.createConnString())
	if err != nil {
		log.Fatal("Could not access database", this.DB, "at url", this.URL, "and port", this.Port, "and user", this.User)
	}
	this.dbSession = dbSession
}

func (this MySQL) Query(
	Results *[]interface{},
	Query interface{}) error {
	var err error
	var rows *sql.Rows
	QueryParameters, ok := Query.(QueryParameters)
	if !ok {
		return fmt.Errorf("Query was of type %T but should have been a string", Query)
	}
	if QueryParameters.Context != nil {
		rows, err = this.dbSession.QueryContext(QueryParameters.Context, QueryParameters.Query, QueryParameters)
	} else {
		rows, err = this.dbSession.Query(QueryParameters.Query, QueryParameters.Args...)
	}
	if err != nil {
		return err
	}
	defer rows.Close()
	for rows.Next() {
	}
	return nil
}

func mySQLScanner(rows *sql.Rows, resultsMap resultsMapper) error {
	ColumnNames, err := rows.Columns()
	if err != nil {
		return err
	}

	numberOfColumns := len(ColumnNames)
	var ColumnNameToIndex map[string]int = make(map[string]int, numberOfColumns)
	for rows.Next() {
		ColumnsValues := make([]interface{}, numberOfColumns)
		ColumnValuePointers := make([]interface{}, numberOfColumns)
		for i, Name := range ColumnNames {
			ColumnNameToIndex[Name] = i
			ColumnValuePointers[i] = &ColumnsValues[i]
		}

		if err := rows.Scan(ColumnValuePointers...); err != nil {
			return err
		}
		if err := resultsMap.resultsMap(ColumnNameToIndex, ColumnValuePointers); err != nil {
			return err
		}
	}
	return nil
}

func (this MySQL) Commit() {

}

func (this MySQL) Rollback() {

}

func (this MySQL) createConnString() string {
	return this.User + ":" + this.Password + "@tcp(" + this.URL +
		":" + this.Port + ")/" + this.DB + "?parseTime=true"
}

func ConnectToDataBasesMySQL(DBConfigJSON string,
	DataBaseArray []*MySQL) {
	configloader.LoadJsonConfiguration(&DataBaseArray, DBConfigJSON)
	for _, sqlDB := range DataBaseArray {
		registerDatabaseServer(sqlDB.DB, sqlDB)
		sqlDB.Connect()
	}
}
