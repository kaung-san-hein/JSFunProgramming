import { arrayUtils } from '../../lib/projecting/arrayUtils.js'
import { apressBooks } from './apressBooks.js'

console.log(
  arrayUtils.map(apressBooks, (book) => {
    return {
      title: book.title,
      author: book.author,
    }
  }),
)
