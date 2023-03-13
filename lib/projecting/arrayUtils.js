const map = (arr, fn) => {
  const result = []
  for (const value of arr) {
    result.push(fn(value))
  }
  return result
}

const filter = (arr, fn) => {
  const result = []
  for (const value of arr) {
    fn(value) ? result.push(value) : undefined
  }
  return result
}

const concatAll = (arr) => {
  const result = []
  for (const value of arr) {
    result.push.apply(result, value)
  }
  return result
}

const reduce = (arr, fn, initialValue) => {
  let accumlator

  if (initialValue !== undefined) {
    accumlator = initialValue
  } else {
    accumlator = arr[0]
  }

  if (initialValue === undefined) {
    for (let i = 1; i < arr.length; i++) {
      accumlator = fn(accumlator, arr[i])
    }
  } else {
    for (const value of arr) {
      accumlator = fn(accumlator, value)
    }
  }

  return [accumlator]
}

const zip = (letArr, rightArr, fn) => {
  let index,
    result = []

  for (index = 0; index < Math.min(letArr.length, rightArr.length); index++) {
    result.push(fn(letArr[index], rightArr[index]))
  }
  return result
}

const arrayUtils = {
  map,
  filter,
  concatAll,
  reduce,
  zip,
}

export { arrayUtils }
