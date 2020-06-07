const express = require("express")
const todosRouter = require("./routers/todos.js")
const app = express()
const PORT = 8080

app.use("/api/todos", todosRouter)

app.listen(PORT, () => {
  console.log(`サーバーが立ち上がりました ${PORT}`)
})
