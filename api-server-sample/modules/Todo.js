//ここにTodoのデータを格納
const todos = []

//インクリメントしていく値
//インクリメント => 1を加算していく事を指す
let nextId = 1

class Todos {
  constructor({ title, body }) {
    this.id = nextId++
    this.title = title
    this.body = body
    this.createdAt = new Date()
    this.ubdatedAt = new Date()
  }
}

//todosに値を格納
for (let i = 0; i < 5; i++) {
  const index = i + 1
  const todo = new Todos({
    title: `タイトル${index}`,
    body: `ボディー${index}`,
  })
  todos.push(todo)
}

//外部からアクセスできるようにする
//ここにメゾットを実行していく
//slice => コピーして新たな変数を作るメゾット
module.exports = {
  findAll: () => {
    return todos.slice()
  },
}
