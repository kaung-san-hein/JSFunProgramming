import request from 'sync-request'
import { arrayUtils } from './projecting/arrayUtils.js'

const Nothing = function (val) {
  this.value = val
}

Nothing.of = function (val) {
  return new Nothing(val)
}

Nothing.prototype.map = function (fn) {
  return this
}

const Some = function (val) {
  this.value = val
}

Some.of = function (val) {
  return new Some(val)
}

Some.prototype.map = function (fn) {
  return Some.of(fn(this.value))
}

console.log(Some.of('test').map((x) => x.toUpperCase()))
console.log(Nothing.of('test').map((x) => x.toUpperCase()))

const Either = {
  Some,
  Nothing,
}

let getTopTenSubRedditPostsEither = (type) => {
  let response
  try {
    response = Some.of(
      JSON.parse(
        request(
          'GET',
          'https://www.reddit.com/r/subreddits/' + type + '.json?limit=10',
        ).getBody('utf8'),
      ),
    )
  } catch (err) {
    response = Nothing.of({
      message: 'Something went wrong',
      errorCode: err['statusCode'],
    })
  }
  return response
}

let getTopTenSubRedditDataEither = (type) => {
  let response = getTopTenSubRedditPostsEither(type)
  return response
    .map((arr) => arr['data'])
    .map((arr) => arr['children'])
    .map((arr) =>
      arrayUtils.map(arr, (x) => {
        return {
          title: x['data'].title,
          url: x['data'].url,
        }
      }),
    )
}

console.log(getTopTenSubRedditDataEither('new'))
