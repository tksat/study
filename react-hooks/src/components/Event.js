import React,{ useContext } from "react"
import { DELETE_EVENT } from "../actions/"
import AppContext from "../contexts/AppContext"


const Event = ({ event }) => {
  const {id, title, body} = event
  const deleteEvent = () => {
    const result = window.confirm(`${id}のイベントを削除してよろしいですか？`)
    if(result)  dispatch({type: DELETE_EVENT, id}) 
  }
  const {dispatch} = useContext(AppContext)

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