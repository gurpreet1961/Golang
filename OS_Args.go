package main

import (
	"fmt"
	"os"
)

func main() {
	// fmt.Printf("%#v\n", os.Args)

	fmt.Println("path", os.Args[0])
	fmt.Println("ist argument", os.Args[1])
	fmt.Println("2nd argument", os.Args[2])
	fmt.Println("3rd argument", os.Args[3])
	fmt.Println("number of items inside os.Args:", len(os.Args))
}

//To run paste below code in cmd
// go run "f:\go\OS_Args.go", "hi" "by" "gurpreet"
