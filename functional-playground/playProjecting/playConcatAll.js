import { arrayUtils } from '../../lib/projecting/arrayUtils.js'
import { apressBooksWithDetail } from './apressBooks.js'

let goodRatingCriteria = (book) => book.rating[0] > 4.5

let result = arrayUtils.filter(
  arrayUtils.concatAll(
    arrayUtils.map(apressBooksWithDetail, (book) => book.bookDetails),
  ),
  goodRatingCriteria,
)

console.log(result)
