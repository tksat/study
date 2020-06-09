const assert = require("power-assert")

//テスト対象のファイル
const Todo = require("../../../modules/Todo")

describe("Todo.findAllメゾットのテスト", () => {
  it("配列の決められたデータ構造でTodoが格納されている", () => {
    const todos = Todo.findAll()

    //todosが配列かどうかのテスト
    assert.equal(Array.isArray(todos), true)
    assert.equal(todos.length > 0, true)
    todos.forEach((todo) => {
      assert.deepStrictEqual(
        { ...todo },
        {
          id: todo.id,
          title: todo.title,
          body: todo.body,
          createdAt: todo.createdAt,
          updatedAt: todo.updatedAt,
        }
      )
    })
  })
})
