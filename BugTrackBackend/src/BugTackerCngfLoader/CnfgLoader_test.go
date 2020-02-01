package bugtackercngfloader

import (
	"encoding/json"
	"os"
	"reflect"
	"testing"
)

type testCnfg struct {
	TS string  `name:"testString" json:"testString"`
	TB bool    `name:"testBool" json:"testBool"`
	TF float64 `name:"testFloat" json:"testFloat"`
	TI int     `name:"testInt" json:"testInt"`
}

var testTempFile string = "testCnfgFileTemp.json"

func (ogTestObject testCnfg) equal(newObject testCnfg) bool {
	typeOGObject := reflect.ValueOf(ogTestObject)
	typeNewObject := reflect.ValueOf(newObject)
	if typeOGObject.Kind() != typeNewObject.Kind() {
		return false
	}
	if ogTestObject.TS != newObject.TS {
		return false
	}
	if ogTestObject.TB != newObject.TB {
		return false
	}
	if ogTestObject.TF != newObject.TF {
		return false
	}
	if ogTestObject.TI != newObject.TI {
		return false
	}
	return true
}

func TestTestCompare(t *testing.T) {
	orginalTestJsonStruct := testCnfg{TS: "testString", TB: false, TF: 10212.121, TI: 52}
	newTestJsonStruct := testCnfg{TS: "testString", TB: false, TF: 10212.121, TI: 52}
	if !orginalTestJsonStruct.equal(newTestJsonStruct) {
		t.Error("data structures where not equal")
	}
	difTestJsonStruct := testCnfg{TS: "testString", TB: false, TF: 0, TI: 52}
	if orginalTestJsonStruct.equal(difTestJsonStruct) {
		t.Error("data structures where equal but should not have been equal")
	}
}

func TestJsonCnfgLoad(t *testing.T) {
	orginalTestJsonStruct := testCnfg{TS: "testString", TB: false, TF: 10212.121, TI: 52}
	var newTestStruct testCnfg
	err := writeJsonTestFile(orginalTestJsonStruct)
	if err != nil {
		t.Error("error writing out json test file: ", err)
	}
	err = LoadJsonConfiguration(&newTestStruct, testTempFile)
	if err != nil {
		t.Error("error loading json config File", err)
	}
	if !orginalTestJsonStruct.equal(newTestStruct) {
		t.Error("data structures where not equal")
	}
}

func writeJsonTestFile(testCnfg testCnfg) (err error) {
	f, err := os.Create(testTempFile)
	defer f.Close()
	if err != nil {
		return err
	}
	defer f.Sync()
	err = json.NewEncoder(f).Encode(&testCnfg)
	return err
}
