// const _ = require("lodash")
// console.log(_.last([1, 2, 3, 4]))

const last = (array) => {
  const index = array.length - 1
  return array[index]
}

console.log(last([1, 2, 3, 4, 3, 0]))
