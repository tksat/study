// uniq関数を実装

// const _ = require("lodash")
// console.log(_.uniq([2, 1, 2, 4, 8, 4, 8]))

const uniq = (array) => {
  const uniqArray = []
  for (let i = 0; i < array.length; i++) {
    const setArray = array[i]
    if (!uniqArray.includes(setArray)) {
      uniqArray.push(setArray)
    }
  }
  return uniqArray
}
console.log(uniq([2, 1, 2, 4, 8, 5, 4, 8]))
