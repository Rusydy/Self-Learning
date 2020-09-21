/*
Original
    function XO(str) {
        //code here
    }
*/

function XO(str) {
    let xCount = 0
    let oCount = 0

    const xRegexp = new RegExp('x', 'i');
    const oRegexp = new RegExp('o', 'i');

    for (let i = 0; i < str.length; i++){
        const letter = str[i]

        if (letter.match(xRegexp)) {
            xCount++
        } else if (letter.match(oRegexp)) {
            oCount++
        }

    }

    return xCount == oCount
}

function XO(str) {
    const xRegexp = new RegExp('x', 'i');
    const oRegexp = new RegExp('o', 'i');

    const counts = str.split('').reduce((counts, letter) => {

        if (letter.match(xRegexp)) {
            counts.xCount++
        } else if (letter.match(oRegexp)) {
            counts.oCount++
        }
        return counts
    }, {xCount: 0, oCount: 0})

    return counts.xCount == counts.oCount
}

const result = XO("xxOo")
console.log(result)
/*
TEST

console.log(XO('xo'),true);
console.log(XO("xxOo"),true);
console.log(XO("xxxm"),false);
console.log(XO("Oo"),false);
console.log(XO("ooom"),false);
*/