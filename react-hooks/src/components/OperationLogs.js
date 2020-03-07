import React, { useContext } from "react"
import AppContext from "../contexts/AppContext"

const OperationLogs = () => {
  const { state } = useContext(AppContext)
  return (
    <>
    <h4>ログを表示</h4>
    <table>
      <tbody>
        <tr>
          <th>
            操作ログ
          </th>
          <th>
            日時
          </th>
        </tr>
        { state.operationLogs.map(add => {
          const {id, operation, time} = add
          return (
            <tr key={ id }>
              <td>{ operation }</td>
              <td>{ time }</td>
            </tr>
          )
        }) }
      </tbody>
    </table>
    </>
  )
}

export default OperationLogs