//ここにTodoのデータを格納
const todos = []

//インクリメントしていく値
//インクリメント => 1を加算していく事を指す
const nextId = 1

class Todos {
  constructor({ title, body }) {
    this.id = nextId++
    this.title = title
    this.body = body
    this.createdAt = new Date()
    this.ubdatedAt = new Date()
  }
}

//外部からアクセスできるようにする
//ここにメゾットを実行していく
module.exports = {}
