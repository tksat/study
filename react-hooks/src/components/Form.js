import React, { useState, useContext } from "react"
import { CREATE_EVENT, DELETE_ALL_EVENT } from "../actions/"
import AppContext from "../contexts/AppContext"

const Form = () => {
  const [title, setTitle] = useState("")
  const [body, setBody] = useState("")
  const {state, dispatch} = useContext(AppContext)

  const addEvent = e => {
    e.preventDefault()
    dispatch({type: CREATE_EVENT,title, body})
    setTitle("")
    setBody("")
  }

  const allEventDelete = e => {
    e.preventDefault()
    const result = window.confirm("全て削除してよろしいですか？")
    if(result)  dispatch({type: DELETE_ALL_EVENT}) 
  }

  return (
    <>
      <h4>イベント作成フォーム</h4>
      <form>
        <div>
          <label　htmlFor="title">タイトル</label>
          <input onChange={(e)=>{setTitle(e.target.value)}} type="text" value={title} id="title" size="40"/>
        </div>
        <div>
          <label htmlFor="body">イベント</label>
          <input onChange={(e) => setBody(e.target.value)} type="text" value={body} id="body" size="40"/>
        </div>
        <div>
          <button onClick={addEvent} disabled={title === "" || body === "" ? true : false}>イベントを作成</button>
          <button onClick={allEventDelete} disabled={state.events.length === 0 }>全てのイベントを削除</button>
        </div>
      </form>
    </>
  )
}

export default Form