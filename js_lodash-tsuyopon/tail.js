// const _ = require("lodash")
// console.log(_.tail([1, 2, 3, 5, 6]))

//▼filterメゾッドを使った場合
// const tail = (numbers = []) => {
//   return numbers.filter((value, index, array) => {
//     return array.indexOf(value) !== 0
//   })
// }
// console.log(tail([2, 4, 5]))

const tail = (array) => {
  const tailNewArray = []
  for (let i = 1; i < array.length; i++) {
    tailNewArray.push(array[i])
  }
  return tailNewArray
}

console.log(tail([1, 2, 3, 5, 6]))
