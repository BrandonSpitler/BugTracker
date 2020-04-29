package bugtrackdblayer

import (
	"testing"

	"github.com/brandonspitler/bug-tracker/pkg/dblayer"
)

type dataBaseTester struct {
	dbID     int
	cnfgFile string
}

const mySQLTestFile string = "testDBconfig.json"

const AppDBName string = "app"
const WebDBName string = "web"
const ConfigDBName string = "config"

func TestMySQLDataBase(*testing.T) {

	MySQLDataBases := make([]*dblayer.MySQL, 0)
	dblayer.ConnectToDataBasesMySQL(mySQLTestFile, MySQLDataBases)
	AppDatabase, err := dblayer.GetDataBaseServer(AppDBName)
	if err != nil {
		Co
	}
	WebDatabase, err := dblayer.GetDataBaseServer(WebDBName)
	if err != nil {

	}
	ConfigDatabase, err := dblayer.GetDataBaseServer(ConfigDBName)
	if err != nil {

	}

	AppDatabase.Query

}
