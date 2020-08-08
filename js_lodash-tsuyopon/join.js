// const _ = require("lodash")
// console.log(_.join(["a", "b", "c"], "~"))

// const join = (array, join = ",") => {
//   let index = array.length - 1
//   let linking = ""
//   for (let i = 0; i < index; i++) {
//     linking += array[i] + join
//   }
//   linking += array[index]
//   return linking
// }

const join = (array, join = ",") => {
  const arrayCopy = [...array]

  //array最初の要素を取り出す
  let linking = arrayCopy.shift()

  for (let i = 0; i < arrayCopy.length; i++) {
    linking += join + arrayCopy[i]
  }

  return linking
}

console.log(join(["a", "b", "c"], "~"))
