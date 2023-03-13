const forEachObject = (obj, fn) => {
    for(let property in obj) {
        if (obj.hasOwnProperty(property)) {
            fn(property, obj[property])
        }
    }
}

export default forEachObject