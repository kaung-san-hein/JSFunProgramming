import forEach from '../lib/forEach.js'
import unless from '../lib/unless.js'

forEach([1, 2, 3, 4, 5, 6], (number) => {
  unless(number % 2, () => {
    console.log(number, ' is even')
  })
})
