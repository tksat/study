// const _ = require("lodash")
// console.log(_.take([1, 2, 3]))

const take = (array = [], take = 1) => {
  if (take === 0) {
    return []
  }

  if (array.length < take) {
    return [...array]
  }

  const newArray = []
  for (let i = 0; i < take; i++) {
    newArray.push(array[i])
  }

  return newArray
}
console.log(take([1, 2, 3], 3))
