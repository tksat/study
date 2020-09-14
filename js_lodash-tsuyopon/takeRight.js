// takeRight関数を実装
// const _ = require("lodash")
// console.log(_.takeRight([1, 2, 3], 2))

// const takeRight = (array = [], takeRightNum) => {
//   const reverseArray = array.reverse()
//   const newArray = []
//   let setNum = 1

//   if (array.length < takeRightNum) {
//     setNum = array.length
//   } else {
//     setNum = takeRightNum
//   }

//   for (let i = 0; i < setNum; i++) {
//     newArray.push(reverseArray[i])
//   }
//   return newArray
// }

const takeRight = (array = [], takeRightNum = 1) => {
  if (takeRightNum === 0) {
    return []
  }

  if (array.length < takeRightNum) {
    return [...array]
  }

  let newArray = []
  for (let i = 0; i < takeRightNum; i++) {
    const index = array.length - (1 + i)
    newArray.push(array[index])
  }
  return newArray
}

console.log(takeRight([9, 8, 1, 2, 3], 2))
