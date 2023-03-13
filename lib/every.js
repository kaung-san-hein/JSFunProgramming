const every = (array, fn) => {
  let result = true
  for (const value of array) {
    result = result && fn(value)
  }
  return result
}

export default every