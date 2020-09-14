// const _ = require("lodash")
var array = ["a", "b", "c", "d", "e", "f"]

// console.log(_.nth(array, 3))
// console.log(_.nth(array, -5))

// const nth = (values, selectNum) => {
//   if (0 < selectNum) {
//     return values[selectNum]
//   } else {
//     let absolute = Math.abs(selectNum)
//     let newArray = []

//     for (let i = 0; i < values.length; i++) {
//       const array = values.length - (i + 1)
//       newArray.push(values[array])
//     }

//     return newArray[absolute - 1]
//   }
// }

// console.log(nth(array, 3))
// console.log(nth(array, -5))

const nth = (values, num) => {
  return 0 < num ? values[num] : values[values.length + num]
}

console.log(nth(array, 3))
console.log(nth(array, -5))
