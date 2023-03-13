import sortBy from "../lib/sortBy.js"

let people = [
  { firstname: 'aaFirstName', lastname: 'cclastName' },
  { firstname: 'bbFirstName', lastname: 'bblastName' },
  { firstname: 'ccFirstName', lastname: 'aalastName' },
]

console.log(people.sort(sortBy('lastname')))