const curry = (binaryFn) => {
    return (firstArg) => {
        return (secondArg) => {
            return binaryFn(firstArg, secondArg)
        }
    }
}

export default curry