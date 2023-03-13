import compose from "../lib/compose.js";

// let data = parseFloat("3.56")
// let number = Math.round(data)

let number = compose(Math.round, parseFloat)

console.log(number("3.56"))

let splitIntoSpaces = (str) => str.split(' ')
let count = (arr) => arr.length

let countWords = compose(count, splitIntoSpaces)

console.log(countWords("Hello World"))