package Mongodb

import (
	"go.mongodb.org/mongo-driver/mongo"
)



type MongoDB struct{
	URL string `json:"URL"`
	Port string `json:"Port"`
	DB string `json:Database`
}


func (mgDB MongoDB) connect(cnfgFile string) bool {

}


