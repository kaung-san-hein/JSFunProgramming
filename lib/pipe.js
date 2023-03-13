import { arrayUtils } from './projecting/arrayUtils.js'

const pipe = (...fns) => (value) =>
  arrayUtils.reduce(fns, (acc, fn) => fn(acc), value)

export default pipe
