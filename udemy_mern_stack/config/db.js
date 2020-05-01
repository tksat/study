const mongoose = require("mongoose")
const config = require("config")
const db = config.get("mongoURI")

const connectDB = async () => {
  try {
    await mongoose.connect(db, {
      useUnifiedTopology: true,
    })
    console.log("mongoDBにコネクト成功しました！")
  } catch (err) {
    console.error(err.message)

    //エラーになったらprocess.exitを実行
    process.exit(1)
  }
}

module.exports = connectDB
