import compose2 from "../lib/compose2.js"

let splitIntoSpaces = (str) => str.split(' ')
let count = (arr) => arr.length
let oddOrEven = (ip) => (ip % 2 == 0 ? 'even' : 'odd')

let oddOrEvenWords = compose2(oddOrEven, count, splitIntoSpaces)

console.log(oddOrEvenWords("hello your reading about composition"))