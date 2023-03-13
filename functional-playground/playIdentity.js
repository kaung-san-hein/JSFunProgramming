import compose2 from "../lib/compose2.js"
import identity from "../lib/identity.js"

let splitIntoSpaces = (str) => str.split(' ')
let count = (arr) => arr.length
let oddOrEven = (ip) => (ip % 2 == 0 ? 'even' : 'odd')

compose2(identity, oddOrEven, identity, count, identity, splitIntoSpaces)("hello your reading about composition")