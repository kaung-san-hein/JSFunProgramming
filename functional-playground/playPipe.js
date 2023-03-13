import pipe from "../lib/pipe.js"

let splitIntoSpaces = (str) => str.split(' ')
let count = (arr) => arr.length
let oddOrEven = (ip) => (ip % 2 == 0 ? 'even' : 'odd')

let oddOrEvenWords = pipe(splitIntoSpaces, count, oddOrEven)

console.log(oddOrEvenWords("hello your reading about composition"))