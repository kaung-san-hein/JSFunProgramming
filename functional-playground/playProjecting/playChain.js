import { arrayUtils } from '../../lib/projecting/arrayUtils.js'
import { apressBooks } from './apressBooks.js'

let result = arrayUtils.map(
  arrayUtils.filter(apressBooks, (book) => book.rating[0] > 4.5),
  (book) => {
    return {
      title: book.title,
      author: book.author,
    }
  },
)

console.log(result)
