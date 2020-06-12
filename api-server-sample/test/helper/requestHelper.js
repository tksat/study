const request = require("supertest")
const app = require("../../app")

module.exports = {
  request: ({ method, endPoint, statusCode }) => {
    //▼supertest
    return (
      request(app)
        [method](endPoint)
        //▼全てのAPIで共通のテスト
        .set("Accept", "application/json")
        //▼全てのAPIで共通のテスト
        .expect("Content-type", /application\/json/)
        .expect(statusCode)
    )
  },
}
