import times from '../lib/times.js'
import unless from '../lib/unless.js'

times(100, (number) => {
  unless(number % 0, () => console.log(number, ' is even'))
})
