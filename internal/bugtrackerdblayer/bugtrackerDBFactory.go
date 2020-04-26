package bugtrackdblayer

import (
	"github.com/brandonspitler/bug-tracker/pkg/configloader"
	"github.com/brandonspitler/bug-tracker/pkg/dblayer"
)

type Databases []dblayer.Database

type mySQLDataBases []dblayer.MySql

const testMySQLDBConfig string = "testDBConfig.json"

func addDataBase() int {
	configloader.LoadJsonConfiguration(&mySQLDataBases, testMySQLDBConfig)

}
