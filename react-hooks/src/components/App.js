import React, { useReducer } from 'react';
import reducer from "../reducers/"
import Form from "./Form"
import EventList from "./EventList"
import AppContext from "../contexts/AppContext"

function App() {
  const [state, dispatch] = useReducer(reducer, [])

  return (
    <AppContext.Provider value={{state, dispatch}}>
      <Form/>
      <EventList/>
    </AppContext.Provider>
  );
}

export default App;
