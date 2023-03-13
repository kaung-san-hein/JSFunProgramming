const some = (array, fn) => {
  let result = false
  for (const value of array) {
    result = result || fn(value)
  }
  return result
}

export default some
