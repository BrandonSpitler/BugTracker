package bugtackercngfloader

import (
	"HYDRA/filehandler/decoders"
	"errors"
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
	err = decoders.DecodeJSONConfig(obj, filename)
	return err
}
