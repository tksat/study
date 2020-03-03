import React, { useState, useReducer } from 'react';
import reducer from "../reducers/"
import Event from "./Event"

function App() {
  const [state, dispatch] = useReducer(reducer, [])
  const [title, setTitle] = useState("")
  const [body, setBody] = useState("")

  const addEvent = e => {
    e.preventDefault()
    dispatch({type:"CREATE_EVENT",title, body})
    setTitle("")
    setBody("")
  }

  const allEventDelete = e => {
    e.preventDefault()
    const result = window.confirm("全て削除してよろしいですか？")
    if(result)  dispatch({type:"DELETE_ALL_EVENT"}) 
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
          <button onClick={allEventDelete} disabled={state.length ? false : true }>全てのイベントを削除</button>
        </div>
      </form>

      <h4>イベント一覧</h4>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>タイトル</th>
            <th>ボディー</th>
          </tr>
          { state.map(event => <Event key={event.id} event={event} dispatch={dispatch}/>) }
        </thead>
        <tbody>
        </tbody>
      </table>
    </>
  );
}

export default App;
