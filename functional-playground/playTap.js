import forEach from '../lib/forEach.js'
import tap from '../lib/tap.js'

tap('fn')((it) => console.log('value is ', it))

forEach([1, 2, 3], (a) => {
  tap(a)()
})
