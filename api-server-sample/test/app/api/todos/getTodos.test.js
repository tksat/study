const request = require("supertest")
const assert = require("power-assert")
const app = require("../../../../app")

//describeとitを使用してテストの型を作る
describe("test GET/api/todos", () => {
  it("todosのデータがレスポンスで返ってくる", async () => {
    const response = await request(app)
      .get("/api/todos")
      .set("Accept", "application/json")
      //レスポンスのContent-Typeがjsonであるかテスト
      .expect("Content-Type", /application\/json/)
      //レスポンスのステータスが200であるかテスト
      .expect(200)

    const todos = response.body

    //todosが配列になっているかテスト
    assert.equal(Array.isArray(todos), true)

    //各要素の型をテスト
    todos.forEach((todo) => {
      assert.equal(typeof todo.id === "number", true)
      assert.equal(typeof todo.title === "string", true)
      assert.equal(typeof todo.body === "string", true)
      assert.equal(typeof todo.createdAt === "string", true)
      assert.equal(typeof todo.updatedAt === "string", true)
    })
  })
})
