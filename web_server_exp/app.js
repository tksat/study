const express = require("express")
const app = express()
const port = 3000
const router = require("./router")

app.set("view engine", "ejs")

//静的ファイルの指定
app.use(express.static("public"))

app.use("/", router)

app.listen(port, () => console.log(`${port}で表示できたよ123`))
