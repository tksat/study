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

//▼静的メンバについて
//static修飾子はnewせず直接呼び出す
class Me {
  static isProgramer: boolean = true
  static firstName: string = "tanaka"
  static lastName: string = "tadashi"

  static work(): string {
    return `${this.firstName}さん、関数も静的メンバにできるよ`
  }
}

// ↓ staticがなかった場合
// const me = new Me()
// console.log(me.isProgramer)

console.log("static", Me.isProgramer)
console.log("static", Me.work())

//▼namespaceによる名前空間
//同じ命名のものを作ることができる

namespace Japanese {
  export class Person {
    constructor(public name: string) {
      this.name = name
    }
  }

  export namespace Tokyo {
    export class Person {
      constructor(public name: string) {
        this.name = name
      }
    }
  }
}

namespace English {
  export class Person {
    constructor(public firstName: string, public lastName: string) {}
  }
}

const me = new Japanese.Person("田中")
console.log(me.name)

const sat = new Japanese.Tokyo.Person("熊谷")
console.log(sat)

const michael = new English.Person("Michael", "Joseph")
console.log(`${michael.firstName}・${michael.lastName}`)

//▼classの拡張
// 既存のclassを拡張して新たなclassを作る

class Animal {
  constructor(public name: string) {}

  run(): string {
    return "I can run"
  }
}

class Lion extends Animal {
  constructor(name: string, public speed: number) {
    //superは親に渡す
    super(name)
  }

  run(): string {
    //super.run() → 親クラスの関数が呼べる(ts表記)
    return `${this.name} ${super.run()} ${this.speed}km`
  }
}

const cat = new Animal("cat")
console.log(cat.run())
const lion = new Lion("Lion", 80)
console.log(lion.run())
