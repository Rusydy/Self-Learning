/*
Original  
    String.prototype.toJadenCase = function () {
    //...
    };
*/

/*
PSEUDOCODE

    Set up a place to store the jadenCaseStr
    Set up a palce to store wether the next letter we encounter shuld be capitalized

    Always capitalize the first letter of the string
    Iterate over each letter in the string
        if... the current letter is a space, next letter should be capitalized
        else... append either the letter itself, or capitalized letter
*/

String.prototype.toJadenCase = function () {
    let JadenCase = ''
    let capitalize = true

    for (let i = 0; i < this.length; i++) {
        const letter = this[i]

        if (letter === ' ') {
            capitalize = true
            JadenCase += ' '
        } else {
            if (capitalize) {
                JadenCase += letter.toUpperCase()
                capitalize = false
            } else {
                JadenCase += letter.toLowerCase()
            }
        }
    }

    return JadenCase
};


/*
PSEUDOCODE

Split th string on spaces
    Capitalize th first letter of each word
    Join them all back together
*/
String.prototype.toJadenCase = function () {
    return this.split(' ').map(
        word => {
            return word[0].toUpperCase() + word.slice(1)
        }
    ).join(' ')
};

let str = "How can mirrors be real if our eyes aren't real"; 

let JadenCase = str.toJadenCase();
console.log(JadenCase)