import partial from "../lib/partial.js"

const delayTenMs = partial(setTimeout, undefined, 10)

// delayTenMs(() => console.log('Do X task'))
delayTenMs(() => console.log('Do Y task'))

let obj = {foo: "bar", bar: "foo"}
JSON.stringify(obj, null, 2);

let prettyPrintJson = partial(JSON.stringify,undefined,null,2)

console.log(prettyPrintJson({foo: "bar", bar: "foo"}))
console.log(prettyPrintJson({foo: "bar2", bar: "foo2"}))