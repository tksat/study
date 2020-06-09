const assert = require("power-assert")
const Todo = require("../../../modules/Todo")

describe("Todo.create", () => {
  it("メゾット実行後、引数にtitle含むオブジェクトが無いとエラーになる", () => {
    const dataList = [
      {}, //empty data
      { body: "説明文" }, // titleが無いdata
    ]

    dataList.forEach((data) => {
      try {
        Todo.create(data)
        assert.fail() //必ずエラーを発生させる
      } catch (error) {
        assert.equal(error.message, "titleは必須です")
      }
    })
  })

  it("メゾット実行後、引数にbody含むオブジェクトが無いとエラーになる", () => {
    try {
      Todo.create({ title: "タイトル" })
      assert.fail()
    } catch (error) {
      assert.equal(error.message, "bodyは必須です")
    }
  })

  it("メゾット実行後、正しい引数を渡すと新規Todoを作成し、新規Todoのみ返す", () => {
    const oldTodos = Todo.findAll()
    const data = {
      title: "ダミータイトルです",
      body: "ダミーボディです",
    }

    //返す値が正しいか
    const createdTodo = Todo.create(data)
    assert.deepEqual(createdTodo, {
      id: createdTodo.id,
      title: data.title,
      body: data.body,
      createdAt: createdTodo.createdAt,
      updatedAt: createdTodo.updatedAt,
    })

    //データが追加されているか
    const currentTodos = Todo.findAll()
    assert.equal(oldTodos.length + 1, currentTodos.length)
  })
})
