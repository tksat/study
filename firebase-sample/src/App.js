import React, { useState } from "react"
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
  const db = firebase.firestore()

  //データを取得
  const handleClickFetchButton = async () => {
    const _user = []
    const users = await db.collection("user").get()
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
    await db.collection("user").set()
  }

  const userLists = user.map((data) => {
    return (
      <li key={data.id}>
        {data.name} : {data.age}
      </li>
    )
  })

  return (
    <>
      <h1>Hello Wold</h1>
      <button onClick={handleClickFetchButton}>取得</button>
      <button onClick={handleClickAddButton}>追加得</button>
      <ul>{userLists}</ul>
    </>
  )
}

export default App
