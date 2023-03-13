import compose from "../lib/compose.js"
import curry2 from "../lib/curry2.js"
import partial from "../lib/partial.js"
import { arrayUtils } from "../lib/projecting/arrayUtils.js"
import { apressBooks } from "./playProjecting/apressBooks.js"

let filterOutStandingBooks = (book) => book.rating[0] === 5
let filterGoodBooks = (book) => book.rating[0] > 4.5
let filterBadBooks = (book) => book.rating[0] < 3.5

let projectTitleAndAuthor = (book) => {
  return { title: book.title, author: book.author }
}
let projectAuthor = (book) => {
  return { author: book.author }
}
let projectTitle = (book) => {
  return { title: book.title }
}

let queryGoodBooks = partial(arrayUtils.filter, undefined, filterGoodBooks)
let mapTitleAndAuthor = partial(arrayUtils.map, undefined, projectTitleAndAuthor)
let titleAndAuthorForGoodBooks = compose(mapTitleAndAuthor, queryGoodBooks)

console.log(titleAndAuthorForGoodBooks(apressBooks))