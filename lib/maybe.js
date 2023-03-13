import request from 'sync-request'
import { arrayUtils } from './projecting/arrayUtils.js'

export const MayBe = function (val) {
  this.value = val
}

MayBe.of = function (val) {
  return new MayBe(val)
}

MayBe.prototype.isNothing = function () {
  return this.value === null || this.value === undefined
}

MayBe.prototype.map = function (fn) {
  return this.isNothing() ? MayBe.of(null) : MayBe.of(fn(this.value))
}

// monads
MayBe.prototype.join = function () {
  return this.isNothing() ? MayBe.of(null) : this.value
}

// monads
MayBe.prototype.chain = function (f) {
  return this.map(f).join()
}

// console.log(MayBe.of(null).map((x) => x.toUpperCase()))

// console.log(
//   MayBe.of('George')
//     .map((x) => x.toUpperCase())
//     .map((x) => 'Mr. ' + x),
// )

let getTopTenSubRedditPosts = (type) => {
  let response
  try {
    response = JSON.parse(
      request(
        'GET',
        'https://www.reddit.com/r/subreddits/' + type + '.json?limit=10',
      ).getBody('utf8'),
    )
  } catch (err) {
    response = { message: 'Something went wrong', errorCode: err['statusCode'] }
  }
  return response
}

let getTopTenSubRedditData = (type) => {
  let response = getTopTenSubRedditPosts(type)
  return MayBe.of(response)
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

// console.log(getTopTenSubRedditData('new'))
