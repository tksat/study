import { ADD_OPERATION_LOG, DELETE_ALL_OPERATION_LOGS } from "../actions"

const operationLogs = (state = [], action) => {
  switch(action.type){
    case ADD_OPERATION_LOG:
      const time = () => new Date().toLocaleString({timeZone:'Asia/Tokyo'})
      const operation = {operation: action.operation, time: time()}
      const length = state.length
      let id = length === 0 ? 1 : state[0].id + 1
      return  [{id, ...operation}, ...state];
    case DELETE_ALL_OPERATION_LOGS:
      return [];
    default:
      return state;
  }
}

export default operationLogs