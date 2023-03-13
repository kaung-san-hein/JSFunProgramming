const times = (times, fn) => {
  for (let i = 0; i < times; i++) {
    fn(i)
  }
}

export default times
