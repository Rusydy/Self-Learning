evaporator = (content, evap_per_day, threshold) =>{ 
    let counter = 0

    for (i = 100; i > threshold; i = i - (i * evap_per_day/100)) {
        counter++
    }
    return counter
}

console.log(evaporator(10,10,10)) //22

/*
i = i - (i * evap_per_day/100))
*/