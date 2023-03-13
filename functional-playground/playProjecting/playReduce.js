import { arrayUtils } from '../../lib/projecting/arrayUtils.js'
import { apressBooksWithDetail } from './apressBooks.js'

const unless = [1, 2, 3, 4, 5]

const summation = arrayUtils.reduce(unless, (acc, value) => acc + value)

const product = arrayUtils.reduce(unless, (acc, value) => acc * value, 1)

const bookDetails = arrayUtils.concatAll(
  arrayUtils.map(apressBooksWithDetail, (book) => book.bookDetails),
)

const result = arrayUtils.reduce(bookDetails, (acc, bookDetail) => {
  let goodReviews =
    bookDetail.reviews[0] !== undefined ? bookDetail.reviews[0].good : 0
  let excellentReviews =
    bookDetail.reviews[0] !== undefined ? bookDetail.reviews[0].excellent : 0

  return {
    good: acc.good + goodReviews,
    excellent: acc.excellent + excellentReviews,
  }
}, { good: 0, excellent: 0 })

console.log(result)