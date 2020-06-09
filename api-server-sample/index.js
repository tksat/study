const app = require("./app")
const PORT = 8080

app.listen(PORT, () => {
  console.log(`サーバーが立ち上がりました ${PORT}`)
})
