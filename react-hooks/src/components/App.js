import React, { useReducer } from 'react';
import Form from "./Form"
import EventList from "./EventList"
import AppContext from "../contexts/AppContext"
import OperationLogs from "./OperationLogs"
import reducer from "../reducers/"


const App = () => {
  const initialState = {
    events:[],
    operationLogs:[]
  }
  
  const [state, dispatch] = useReducer(reducer, initialState)

  return (
    <AppContext.Provider value={{state, dispatch}}>
      <Form/>
      <EventList/>
      { state.operationLogs.length === 0 ? null : <OperationLogs /> }
    </AppContext.Provider>
  );
}

export default App;
