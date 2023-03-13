const compose = (a, b) => (c) => a(b(c))

export default compose