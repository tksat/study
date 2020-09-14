// zipObject 関数を実装

// const _ = require("lodash")
// console.log(_.zipObject(["a", "b"], [1, 2]))
// => { a: 1, b: 2 }

const zipObject = (keys = [], values = []) => {
  const obj = {}
  for (let i = 0; i < keys.length; i++) {
    obj[keys[i]] = values[i]
  }
  console.log(typeof obj)
  return obj
}

console.log(zipObject(["a", "b"], [1, 2]))
