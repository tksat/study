// const _ = require("lodash")
// console.log(_.slice([1, 2, 3, 4, 5], 1, 4))
//_.slice(array, [start=0], [end=array.length])

const slice = (array = [], start = 0, end = array.length) => {
  const newArray = []
  for (let i = start; i < end; i++) {
    newArray.push(array[i])
  }
  return newArray
}

console.log(slice([1, 2, 3, 4, 5], 1, 4))
