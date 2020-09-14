// chunk関数を実装
// const _ = require("lodash")
// console.log(_.chunk(["a", "b", "c", "d", "e"], 3))

const chunk = (obj, splitNum) => {
  const objNum = obj.length
  const splitObj = []
  const restObj = []
  let newObj = [splitObj, restObj]

  if (splitNum === 0) {
    return []
  }

  if (objNum < splitNum || splitNum === 1) {
    newObj = [splitObj]
  }

  if (splitNum === 1) {
    for (let i = 0; i < obj.length; i++) {
      newObj.push([obj[i]])
    }
  }

  for (let i = 0; i < objNum; i++) {
    if (i < splitNum) {
      splitObj.push(obj[i])
    } else {
      restObj.push(obj[i])
    }
  }

  return newObj
}

console.log(chunk(["a", "b", "c", "d", "e"], 0))
