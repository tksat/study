import React, { useReducer } from 'react';
import Form from "./Form"
import EventList from "./EventList"
import AppContext from "../contexts/AppContext"
import reducer from "../reducers/"

function App() {
  const initialState = {
    events:[]
  }
  
  const [state, dispatch] = useReducer(reducer, initialState)

  console.log(state)

  return (
    <AppContext.Provider value={{state, dispatch}}>
      <Form/>
      <EventList/>
    </AppContext.Provider>
  );
}

export default App;
