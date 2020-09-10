package main

import (
	"fmt"
	"math"
)

func main() {

	fmt.Println(Movie(500, 15, 0.9)) // 43
	fmt.Println(Movie(0, 10, 0.95))  // 2
}

// Movie is a func to solve John's problem, can you just solve your problem? f*** you John
func Movie(card, ticket int, perc float64) int {
	counter := 0
	priceA := 0
	priceB := float64(card)

	// prevPrice is a variable to track the progression
	prevPrice := float64(ticket)

	for math.Ceil(priceB) >= float64(priceA) {
		priceA += ticket
		prevPrice *= perc
		priceB += prevPrice
		counter++
	}
	return counter
}
