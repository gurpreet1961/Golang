package main

import (
	"fmt"
	"os"
	"strings"
)

func main() {

	msg := os.Args[1]
	l := len(msg)
	s := strings.Repeat("!", l) + msg
	fmt.Println(s)

}

// // package main

// // import "fmt"

// // func main() {
// // 	name := "sangam"
// // 	fmt.Println(len(name))
// // }

// package main

// import (
// 	"fmt"
// 	"unicode/utf8"
// )

// func main() {
// 	name := "Gurpreet"
// 	fmt.Println(utf8.RuneCountInString(name))
// }
