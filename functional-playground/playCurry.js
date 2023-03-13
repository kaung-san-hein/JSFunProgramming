import curry from '../lib/curry.js'

const genericTable = (row, col) => row * col

const table2 = curry(genericTable)(2)
const table3 = curry(genericTable)(3)
const table4 = curry(genericTable)(4)

console.log(table2(2), table3(3), table4(4))