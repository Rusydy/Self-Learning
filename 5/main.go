package main

import "fmt"

type Developer struct {
	Name string
	Age  int
}

func FilterUnique(developers []Developer) []string {
	keys := make(map[string]bool)
	list := []string{}

	for _, entry := range developers {
		if _, value := keys[entry.Name]; !value {
			keys[entry.Name] = true
			list = append(list, entry.Name)
		}
	}
	return list
}

func main() {
	fmt.Println("Filter Unique Challenge")
}
