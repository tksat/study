export {}

//▼classで型を使う
class Person {
  name: string
  age: number

  constructor(name: string, age: number) {
    this.name = name
    this.age = age
  }

  profile(): string {
    return `name: ${this.name} ,age: ${this.age}`
  }
}

let taro = new Person("Taro", 30)
console.log(taro)
console.log(taro.profile())

//▼classのアクセス修飾子
class Person2 {
  public name: string //親もインスタンスもアクセスOK
  private age: number //親のみのアクセス
  protected nationality: string //親クラスと子クラスのみアクセスできる

  constructor(name: string, age: number, nationality: string) {
    this.name = name
    this.age = age
    this.nationality = nationality
  }

  profile(): string {
    return `name: ${this.name} ,age: ${this.age}`
  }

  getAge(): number {
    return this.age
  }
}

class Android extends Person2 {
  constructor(name: string, age: number, nationality: string) {
    //superは親クラスのconstructorを呼べる
    super(name, age, nationality)
  }

  profile(): string {
    return `name: ${this.name} ,国政： ${this.nationality}`
  }
}

let robo = new Android("roboot", 2, "アメリカ")
console.log(robo.profile())

let taro2 = new Person2("Taro", 30, "日本")
console.log(taro2.name)
console.log(taro2.getAge())

//▼classでアクセス修飾子を指定した時の省略方法
class Person3 {
  //アクセス修飾子をコンストラクター内に記述すると初期化処理を書かなくてよくなる
  constructor(public name: string, public age: number, protected nationality) {}

  profile(): string {
    return `name: ${this.name} ,年齢：${this.age} 国政： ${this.nationality}`
  }
}

const tanaka = new Person3("棚中", 44, "韓国")
console.log(tanaka.profile())

//▼getter と setter
class MynumberCard {
  private _owner: string
  private _secretNumber: number

  constructor(owner: string, secretNumber: number) {
    this._owner = owner
    this._secretNumber = secretNumber
  }

  get owner() {
    return this._owner
  }

  set secretNumber(secretNumber: number) {
    this._secretNumber = secretNumber
  }

  debug() {
    return `secretNumber: ${this._secretNumber}`
  }
}

const card = new MynumberCard("さと", 123456)
console.log("dard :", card.owner)
console.log(card.debug())
card.secretNumber = 333333
console.log(card.debug())

//readOnry 修飾子
class VisaCard {
  readonly owner: string

  constructor(owner: string) {
    this.owner = owner
  }
}
const takadaCard = new VisaCard("高田のカードです")
console.log("takadaCard", takadaCard.owner)

//readOnry 修飾子の短い記述方法
class VisaCard2 {
  constructor(public readonly owner: string) {}
}
