package main

import (
	"fmt"
)

func main() {
	fmt.Println(Evaporator(100, 5, 5))  //59
	fmt.Println(Evaporator(10, 10, 10)) //22
	fmt.Println(Evaporator(10, 10, 5))  //29
	fmt.Println(Evaporator(100, 5, 5))  //59
}

// Evaporator from tverka
func Evaporator(content float64, evapPerDay int, threshold int) int {
	// your code
	var count int
	for x := float64(100); x > float64(threshold); x = x - (x * float64(evapPerDay) / float64(100)) {
		count++
	}

	return count

}
