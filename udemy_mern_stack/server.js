const express = require("express")

const app = express()

const PORT = process.env.PORT || 5000

app.get("/", (req, res) => {
  res.send("<h1>TOPページです！</h1>")
})

app.listen(PORT, () => {
  console.log(`${PORT}サーバーができた！`)
})
