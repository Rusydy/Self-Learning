package main

import (
	"fmt"
	"strconv"
)

func MaxRot(n int64) int64 {
	max, rot := n, strconv.FormatInt(n, 10)
	for i := 0; i < len(rot); i++ {
		rot = rot[:i] + rot[i+1:] + rot[i:i+1]
		num, _ := strconv.ParseInt(rot, 10, 64)
		if num > max {
			max = num
		}
		fmt.Println(num)
	}
	return max
}

func main() {
	fmt.Println(MaxRot(38458215)) //85821534
}
