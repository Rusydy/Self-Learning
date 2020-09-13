/* function movie(card, ticket, perc) {
    let counter = 0
    let priceA = 0
    let priceB = card

    let prevPrice = ticket

    while (Math.ceil(priceB) >= priceA) {
        priceA += ticket
        prevPrice *= perc
        priceB += prevPrice
        counter++
    }

    return counter
}; */

function movie(card, ticket, perc) {
    for (
        var s=perc, n=1;
        Math.ceil(card+s*ticket) >= ticket*n;
        s+= Math.pow(perc, ++n)
        ){}
    return n
}

console.log(movie(500, 15, 0.9)) //43
console.log(movie(0, 10, 0.95)) //2