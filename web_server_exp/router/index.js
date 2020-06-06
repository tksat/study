const express = require("express")
const router = express.Router()

router
  .get("/", (req, res) => {
    res.render("index", {
      data: "トップページ",
      siteInfo: {
        name: "Expressの学習です",
        owner: "おおうち",
      },
      items: [{ name: "item1" }, { name: "item2" }, { name: "item3" }],
      title: "renderからデータを渡した場合",
    })
  })
  .get("/about", (req, res) => {
    res.render("about")
  })

module.exports = router
