//const _ = require("lodash")
//console.log(_.without([2, 1, 2, 3, 4], 1, 2))
// => [3]
//第2引数以降と等しい第1引数を除外して残りを表示する

const without = (array, ...numbers) => {
  const withoutNumber = []
  for (let i = 0; i < array.length; i++) {
    const filterNumber = array[i]
    if (!numbers.includes(filterNumber)) {
      withoutNumber.push(filterNumber)
    }
  }
  return withoutNumber
}

console.log(without([2, 1, 2, 3, 4], 1, 2))
