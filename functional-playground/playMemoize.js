import memoize from '../lib/memoize.js'

const fastFactorial = memoize((n) => {
  if (n === 0) return 1

  return n * fastFactorial(n - 1)
})

console.log(fastFactorial(5))
console.log(fastFactorial(5))