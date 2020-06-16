import React from "react"
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
  const handleClick = async () => {
    const db = firebase.firestore()

    //documentの取得
    /*
    const user = await db.collection("user").doc("Q3n403hXwW7vkVKLxDQd").get()
    console.log(user.data())
    */

    //collectionの取得
    //データが複数処理する記述にする事
    /*
    const snapShots = await db.collection("user").get()
    snapShots.forEach((snapShot) => {
      console.log(snapShot.id, "=>", snapShot.data())
    })
    */

    //条件絞り込み where
  }

  return (
    <>
      <h1>Hello Wold</h1>
      <button onClick={handleClick}>取得</button>
    </>
  )
}

export default App
