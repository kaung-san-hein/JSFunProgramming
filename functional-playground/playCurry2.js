import curry2 from '../lib/curry2.js'
import loggerHelper from '../lib/loggerHelper.js'

// const multiply = (x,y,z) => x * y * z;

// curry2(multiply)(3)(2)

let errorLogger = curry2(loggerHelper)('ERROR')('Error At Stats.js')
let debugLogger = curry2(loggerHelper)('DEBUG')('Debug At Stats.js')
let warnLogger = curry2(loggerHelper)('WARN')('Warn At Stats.js')

errorLogger('Error Message ', 21)
// debugLogger('Debug message ', 233)
// warnLogger('Warn message ', 34)
