export {};

//プリミティブ型

//boolean型
let isFinished: boolean = true;
isFinished = false;
console.log({isFinished})

//number型
let year: number = 1982
console.log(year)

let age: number = 0x2b
console.log(age)

//string型
let name: string = 'sato'
console.log(name)

//array型
let numbers: number[] = [1, 2, 3]
let strings: string[] = ['sato', 'jun', 'taro']

let numbers2: Array<number> = [1, 2, 3]
let string2: Array<string> = ['sato', 'jun', 'taro']

let nijigenHairestu: number[][] = [
  [50, 100],
  [30, 40]
]
let nijigenHairestu2: (string | number | boolean)[] = [1, false, 'japan']

//tuple型 オブジェクトが固定された型の場合
let myData: [string, number] = ['sat', 37]
console.log(myData)

//void型 関数からreturnが無いものはvoid型
function returnNothing(): void{
  console.log('returnしない関数です')
}
console.log(returnNothing())

//never型 例外を返す物に設定（エラー型とか）
//void型との違いは、呼び元に戻ってこない事
function error(message: string): never{
  throw new Error(message)
}

try{
  let result = error('エラーです')
  console.log({ result })
}catch(error){
  console.log({ error })
}

//null型 undefined型（基本使用しない）
let absence: null = null
let data: undefined = undefined

//object型
let profile: { name: string } = {name: 'sat'}

//型エイリアス
//頭文字が必ず大文字にする
type Moji = string;
const fooString: string = "hello"
const moji: Moji = "moji" 

type Profile = {
  name: string
  age: number
}

const user: Profile = {
  name: "sato",
  age: 30
}

const profile2 = {
  name: "satoko",
  age: 37
}

//string等で指定しなくても自動で型推論してくれる
type user2 = typeof profile2

//interface
//typeよりすっきり書ける
interface objectType{
  name: string,
  age: number
}

const profile3: objectType = {
  name: "sato",
  age: 30
}

//intersection
//既存の型を利用して新たな型を作る

type Picher1 = {
  throwingspeed: number;
}

type Batter1 = {
  battingAverage: number;
}

type ToWayPlayer = Picher1 & Batter1;

const shouhei: ToWayPlayer = {
  throwingspeed: 105,
  battingAverage: 0.2
}


//union型
//複数の型を持たせたい

let value: string | number = "sato"
value = 30


//Literal型
//細かい型指定ができる

let weekend: "日" = "日"
let week: '月'|'火'|'水'|'木'|'金' = '火'

//enum型
//数値や文字列を列挙する時に便利な型

enum Manths {
  janudary = 1, //列挙する最初の数字を初期設定できる
  february,
  march,
  april,
  may
}

console.log(Manths.janudary) // 結果：　0
console.log(Manths.february); // 結果：　0

enum COLORS {
  RED = '#FF0000',
  WHITE = '#FFFFFF',
  BLUE = '#0000FF'
}

console.log(COLORS.RED)
console.log(COLORS.BLUE)

enum COLORS {
  YERROW = '#FFFF00',
  GRAY = '#333333'
}

console.log(COLORS.YERROW)