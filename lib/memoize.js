const memoize = (fn) => {
  const lookupTable = {}

  return (arg) => lookupTable[arg] || (lookupTable[arg] = fn(arg))
}

export default memoize