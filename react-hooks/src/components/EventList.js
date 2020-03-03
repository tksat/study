import React from "react"
import Event from "./Event"

const EventList = ({state, dispatch}) => {
  return (
    <>
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
  )
}

export default EventList