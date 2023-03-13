import request from 'sync-request'
import { MayBe } from './maybe.js'
import { arrayUtils } from './projecting/arrayUtils.js'

let searchReddit = (search) => {
  let response
  try {
    response = JSON.parse(
      request(
        'GET',
        'https://www.reddit.com/search.json?q=' + encodeURI(search),
      ).getBody('utf8'),
    )
  } catch (err) {
    response = { message: 'Something went wrong', errorCode: err['statusCode'] }
  }
  return response
}

let getComments = (link) => {
  let response
  try {
    response = JSON.parse(
      request('GET', 'https://www.reddit.com/' + link).getBody('utf8'),
    )
  } catch (err) {
    response = { message: 'Something went wrong', errorCode: err['statusCode'] }
  }
  return response
}

// let mergeViaMayBe = (searchText) => {
//   let redditMayBe = MayBe.of(searchReddit(searchText))
//   let ans = redditMayBe
//     .map((arr) => arr['data'])
//     .map((arr) => arr['children'])
//     .map((arr) =>
//       arrayUtils.map(arr, (x) => {
//         return {
//           title: x['data'].title,
//           permalink: x['data'].permalink,
//         }
//       }),
//     )
//     .map((obj) =>
//       arrayUtils.map(obj, (x) => {
//         return {
//           title: x.title,
//           comments: MayBe.of(
//             getComments(x.permalink.replace('?ref=search_posts', '.json')),
//           ),
//         }
//       }),
//     )

//   return ans
// }

// let answer = mergeViaMayBe('functional programming')

// answer.map((result) => {
//   arrayUtils.map(result, (mergeResults) => {
//     mergeResults.comments.map((comment) => {
//         console.log(comment)
//     })
//   })
// })

// let mergeViaJoin = (searchText) => {
//   let redditMayBe = MayBe.of(searchReddit(searchText))
//   let ans = redditMayBe
//     .map((arr) => arr['data'])
//     .map((arr) => arr['children'])
//     .map((arr) =>
//       arrayUtils.map(arr, (x) => {
//         return {
//           title: x['data'].title,
//           permalink: x['data'].permalink,
//         }
//       }),
//     )
//     .map((obj) =>
//       arrayUtils.map(obj, (x) => {
//         return {
//           title: x.title,
//           comments: MayBe.of(
//             getComments(x.permalink.replace('?ref=search_posts', '.json')),
//           ).join(),
//         }
//       }),
//     )
//     .join()

//   return ans
// }

// console.log(mergeViaJoin("functional programming"))

let mergeViaChain = (searchText) => {
  let redditMayBe = MayBe.of(searchReddit(searchText))
  let ans = redditMayBe
    .map((arr) => arr['data'])
    .map((arr) => arr['children'])
    .map((arr) =>
      arrayUtils.map(arr, (x) => {
        return {
          title: x['data'].title,
          permalink: x['data'].permalink,
        }
      }),
    )
    .chain((obj) =>
      arrayUtils.map(obj, (x) => {
        return {
          title: x.title,
          comments: MayBe.of(
            getComments(x.permalink.replace('?ref=search_posts', '.json')),
          ).chain((x) => x.length),
        }
      }),
    )

  return ans
}
