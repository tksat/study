// const _ = require("lodash")
// console.log(_.initial([1, 2, 3, 4, 5, 6]))

// const initial = (array) => {
//   const initialArray = []
//   for (let i = 0; i < array.length - 1; i++) {
//     initialArray.push(array[i])
//   }
//   return initialArray
// }

const initial = (array) => {
  const copedArray = [...array]

  //popメゾッドは末尾の要素を取り除く
  copedArray.pop()
  return copedArray
}

console.log(initial([1, 2, 3, 4]))
// => [ 1, 2, 3, 4, 5 ]
