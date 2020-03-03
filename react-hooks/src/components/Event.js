import React from "react"
import { DELETE_EVENT } from "../actions/"


const Event = ({event, dispatch}) => {
  const {id, title, body} = event
  const deleteEvent = () => {
    const result = window.confirm(`${event.id}のイベントを削除してよろしいですか？`)
    if(result)  dispatch({type: DELETE_EVENT, id}) 
  }

  return(
    <tr key={id}>
      <td>{id}</td>
      <td>{title}</td>
      <td>{body}</td>
      <td><button onClick={deleteEvent}>削除</button></td>
    </tr>
  )
}

export default Event