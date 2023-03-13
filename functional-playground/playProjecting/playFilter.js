import { arrayUtils } from '../../lib/projecting/arrayUtils.js'
import { apressBooks } from './apressBooks.js'

const result = arrayUtils.filter(apressBooks, (book) => book.rating[0] > 4.5)

console.log(result)