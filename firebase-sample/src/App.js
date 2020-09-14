import React, { useState, useEffect } from "react"
import * as firebase from "firebase/app"
import "firebase/firestore"

//データの初期化
const firebaseConfig = {
  apiKey: "AIzaSyDgKv2-4ZHIk90sChDYUzReXHgZMPwEfNY",
  authDomain: "test1-bdf59.firebaseapp.com",
  databaseURL: "https://test1-bdf59.firebaseio.com",
  projectId: "test1-bdf59",
  storageBucket: "test1-bdf59.appspot.com",
  messagingSenderId: "510560185912",
  appId: "1:510560185912:web:b3e0914e4fb1ec3ce4c0cd",
  measurementId: "G-B26ZYH66G2",
}
firebase.initializeApp(firebaseConfig)

function App() {
  const [user, setUser] = useState([])
  const [name, setName] = useState("")
  const [age, setAge] = useState("")
  const [userId, setUserId] = useState("")

  //更新を検知
  useEffect(() => {
    const db = firebase.firestore()
    const unsubscribe = db
      .collection("user")
      .orderBy("age")
      .onSnapshot((querySnaphot) => {
        //   querySnaphot.forEach((doc) => {
        //     console.log("検知!!")
        //     console.log(doc.id, doc.data())
        //     console.log("---------------------")
        //   })
        const _users = querySnaphot.docs.map((doc) => {
          return { id: doc.id, ...doc.data() }
        })
        setUser(_users)
      })

    return () => {
      unsubscribe()
    }
  }, [])

  //データを取得
  const handleClickFetchButton = async () => {
    const db = firebase.firestore()
    const _user = []
    const users = await db.collection("user").orderBy("age").get()
    users.forEach((doc) => {
      _user.push({
        id: doc.id,
        ...doc.data(),
      })
    })
    setUser(_user)
  }

  //データを追加
  const handleClickAddButton = async () => {
    const db = firebase.firestore()

    if (name === "" || age === "") {
      alert("正しく入力してください")
      return
    }

    //文字列を数字に変換する
    const parsedAge = parseInt(age, 10)

    //数字文字チェック
    if (isNaN(parsedAge)) {
      alert("数字を入力してください")
      return
    }

    await db.collection("user").add({ name, age })
    setName("")
    setAge("")
  }

  //データを変更
  const handleClickChangeButton = async () => {
    const db = firebase.firestore()

    if (!userId) {
      alert("idを入力してください")
      return
    }

    const newData = {}
    if (name) {
      newData["name"] = name
    }
    if (age) {
      newData["age"] = parseInt(age, 10)
    }

    try {
      await db.collection("user").doc(userId).update(newData)
      setName("")
      setAge("")
      setUserId("")
    } catch (error) {
      console.log(error)
    }
  }

  //データの削除
  const handleClickDeleteButton = async () => {
    const db = firebase.firestore()

    if (!userId) {
      alert("idを入力してください")
      return
    }

    await db.collection("user").doc(userId).delete()
    setName("")
    setAge("")
    setUserId("")
  }

  const userLists = user.map((data) => {
    return (
      <li key={data.id}>
        <div>id: {data.id}</div>
        <div>name: {data.name}</div>
        <div>age: {data.age}</div>
      </li>
    )
  })

  return (
    <>
      <h1>Hello Wold</h1>
      <button onClick={handleClickFetchButton}>取得</button>
      <div>
        <div>
          <span>name</span>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div>
          <span>age</span>
          <input
            type="text"
            value={age}
            onChange={(e) => setAge(e.target.value)}
          />
        </div>
        <div>
          <span>id</span>
          <input
            type="text"
            value={userId}
            onChange={(e) => setUserId(e.target.value)}
          />
        </div>
        <button onClick={handleClickAddButton}>追加</button>
        <button onClick={handleClickChangeButton}>変更</button>
        <button onClick={handleClickDeleteButton}>削除</button>
      </div>
      <ul>{userLists}</ul>
    </>
  )
}

export default App
