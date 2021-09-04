package main

import (
	"fmt"
	"reflect"
)

func main() {

	// var i int = 1
	// var w float64 = 12.5

	// fmt.Println(i, w)

	// a := 30

	// Language := "Go Programming"

	// fmt.Println("The Value of a is: ", a)
	// fmt.Println("The Value of Language is: ", Language)

	var i, j, k = 1, 2, 3

	var (
		name = "Gurpreet Singh"
		age  = 20
	)

	fmt.Println(i, j, k)
	fmt.Printf("%s is %d year old\n", name, age)
	fmt.Println(reflect.TypeOf(name))

}
