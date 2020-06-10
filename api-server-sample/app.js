const express = require("express")
const todosRouter = require("./routers/todos.js")
const app = express()

app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.use("/api/todos", todosRouter)

module.exports = app
