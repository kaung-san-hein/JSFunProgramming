const unless = (predicate, fn) => {
    if(!predicate) fn()
}

export default unless