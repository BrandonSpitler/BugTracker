package configloader

import (
	"encoding/json"
	"errors"
	"fmt"
	"log"
	"os"
	"reflect"
)

var wrongTypeError error = errors.New("Type must be a pointer to a struct")

func LoadJsonConfiguration(obj interface{}, filename string) (err error) {
	mysRValue := reflect.ValueOf(obj)
	if mysRValue.Kind() != reflect.Ptr || mysRValue.IsNil() {
		return wrongTypeError
	}
	mysRValue = mysRValue.Elem()
	if mysRValue.Kind() != reflect.Struct {
		return wrongTypeError
	}
	err = DecodeJSONConfig(obj, filename)
	return err
}

func DecodeJSONConfig(v interface{}, fileName string) error {
	fmt.Println("Decoding JSON")
	file, err := os.Open(fileName)
	defer func() {
		err := file.Close()
		if err != nil {
			log.Fatal(err)
		}
	}()
	if err != nil {
		return err
	}

	return json.NewDecoder(file).Decode(v)
}
