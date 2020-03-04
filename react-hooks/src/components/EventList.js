import React, { useContext } from "react"
import Event from "./Event"
import AppContext from "../contexts/AppContext"

const EventList = () => {
  const { state } = useContext(AppContext)
  return (
    <>
      <div>value</div>
      <h4>イベント一覧</h4>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>タイトル</th>
            <th>ボディー</th>
          </tr>
          { state.map(event => <Event key={event.id} event={event} />) }
        </thead>
        <tbody>
        </tbody>
      </table>
    </>
  )
}

export default EventList