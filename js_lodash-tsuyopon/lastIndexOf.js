// const _ = require("lodash")
// console.log(_.lastIndexOf([1, 2, 1, 2], 2))
// console.log(_.lastIndexOf([1, 2, 1, 2], 2, 5))

const lastIndexOf = (array, selectNum, startIndex = array.length - 1) => {
  for (let i = startIndex; 0 <= i; i--) {
    if (array[i] === selectNum) {
      return i
    }
  }
  return -1
}

console.log(lastIndexOf([1, 2, 1, 2], 2))
