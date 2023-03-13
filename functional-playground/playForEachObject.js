import forEachObject from '../lib/forEachObject.js'

let object = {
  a: 1,
  b: 2,
}

forEachObject(object, (k, v) => console.log(k + ' : ' + v))
