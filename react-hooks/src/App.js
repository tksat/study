import React,{ useState } from 'react'

const App = props => {
  const [state, setState] = useState(props)

  const reset = () => {
    setState(props)
  }

  return (
    <>
      <h2>{`${state.name}は${state.price}円です`}</h2>
      <input onChange={e => setState({...state, name: e.target.value})} value={state.name} />
      <button onClick={() => setState({...state, price: state.price + 100})}>+100</button>
      <button onClick={reset}>リセット</button>
    </>
  )
}

App.defaultProps = {
  name: "",
  price: 1000
}

export default App;
