import curry2 from '../lib/curry2.js'

let match = curry2((expr, str) => {
  return str.match(expr)
})

let hasNumber = match(/[0-9]+/)

let filter = curry2((f, ary) => {
  return ary.filter(f)
})

let findNumbersInArray = filter(hasNumber)

console.log(findNumbersInArray(['js', 'number1']))

let map = curry2(function (f, ary) {
  return ary.map(f)
})
let squareAll = map((x) => x * x)
console.log(squareAll([1, 2, 3]))

let even = filter((x) => !(x % 2))
console.log(even([1,2,3,4]))