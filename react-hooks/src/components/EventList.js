import React, { useContext } from "react"
import Event from "./Event"
import AppContext from "../contexts/AppContext"

const EventList = () => {
  const { state } = useContext(AppContext)
  return (
    <>
      <h4>イベント一覧</h4>
      <table>
        <tbody>
          <tr>
            <th>ID</th>
            <th>タイトル</th>
            <th>ボディー</th>
          </tr>
          { state.events.map(event => <Event key={event.id} event={event} />) }
        </tbody>
      </table>
    </>
  )
}

export default EventList