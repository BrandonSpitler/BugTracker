package dblayer

type dblayer interface {
	
	connect(cnfgFile string) bool
}
