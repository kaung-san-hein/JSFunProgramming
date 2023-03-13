import { arrayUtils } from '../../lib/projecting/arrayUtils.js'
import { apressBooksWithDetailNotReviews, reviewDetails } from './apressBooks.js'

// console.log(arrayUtils.zip([1, 2, 3], [1, 2, 3], (x, y) => x + y))

let bookDetails = arrayUtils.concatAll(
  arrayUtils.map(apressBooksWithDetailNotReviews, (book) => {
    return book.bookDetails
  }),
)

let mergedBookDetails = arrayUtils.zip(
    bookDetails,
    reviewDetails,
    (book, review) => {
        if(book.id === review.id) {
            let clone = {
                ...book,
                ratings: review
            }
            return clone
        }
    }
)

// console.log(bookDetails)

console.log(mergedBookDetails)