import React from "react"

const Event = ({event, dispatch}) => {
  const {id, title, body} = event
  const deleteEvent = () => {
    dispatch({type:"DELETE_EVENT", id})
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