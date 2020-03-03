import React, { useReducer } from 'react';
import reducer from "../reducers/"
import Form from "./Form"
import EventList from "./EventList"


function App() {
  const [state, dispatch] = useReducer(reducer, [])

  return (
    <>
      <Form state={state} dispatch={dispatch}/>
      <EventList state={state} dispatch={dispatch} />
    </>
  );
}

export default App;
