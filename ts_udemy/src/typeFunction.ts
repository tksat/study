export {};
//関数をTypescriptにする際に気を付ける事は『引数』と『戻り値』

//▼functionキーワードに夜型
//function bmi(height: 引数の型, weight: 引数の型): 戻り値の型{
function bmi(height: number, weight: number): number{
  return weight / (height * height)
} 
console.log(bmi(1.67, 50))


//▼無名関数による関数定義
//let /bmi2: (height: number, weight: number) => number は関数名に型を設定している
const bmi2: (height: number, weight: number) => number = function(height: number, weight: number): number{
  return weight / (height * height)
}

console.log(bmi2(1.67, 50))


//▼arrow関数による定義
//const bmi3: (height: number, weight: number) => number は関数名に型を設定している
const bmi3: (height: number, weight: number) => number = (
  height: number,
  weight: number
  ): number => weight / (height * height)

console.log(bmi3(1.67, 50))


//▼省略可能な引数について
//必ず入る必要ない引数はお尻に『？』をつける
const bmi4: (height: number, weight: number, printable?: boolean) => number = (
  height: number,
  weight: number,
  printable: boolean
  ) :number => {
    const bmi: number = weight / (height * height)
    if(printable){
      console.log({bmi})
    }
    return bmi
  }

  bmi4(1.67, 50, true)


  //▼デフォルトパラメータ-
  const multiplication: (x?: number, y?: number) => number = (x: number = 3, y: number = 2): number => {
      return x * y
  }

  console.log(multiplication())


   //▼レストパラメータ-の型づけ
   //...value: number[]

   const sum:(...value: number[]) => number = 
   (...value: number[]):number => {
      return value.reduce(reducer)
  }

   const reducer:(x: number, y: number) => number =
    (x: number, y: number): number => {
     return x + y
   }

   console.log(sum(1, 2, 3, 4))


   //▼型のオーバーロード(シグネチャー)
   function double(value: number): number
   function double(value: string): string

   //本体の型はanyに設定しておく。
   //シグネチャーでnumberとstringのみしか受け取れなくなっている
   function double(value: any): any{
      if(typeof value === "number"){
        return value * value
      }else{
        return value + value
      }
   }

   console.log(double(20))
   console.log(double("Hello!"))
  