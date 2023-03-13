import { arrayUtils } from './projecting/arrayUtils.js'

const compose2 = (...fns) => (value) =>
  arrayUtils.reduce(fns.reverse(), (acc, fn) => fn(acc), value)

export default compose2
