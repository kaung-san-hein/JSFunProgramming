const once = (fn) => {
  let done = false
  return function () {
    return done ? undefined : ((done = true), fn.apply(this, arguments))
  }
}

export default once