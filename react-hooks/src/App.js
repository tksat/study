import React,{ useState } from 'react'

const App = props => {
  const [state, setState] = useState(props)
  const {name, price} = state
  return (
    <>
      <h2>{`${name}は${price}円です`}</h2>
      <input onChange={e => setState({...state, name: e.target.value})} value={name} />
      <button onClick={() => setState({...state, price: price + 100})}>+100</button>
      <button onClick={() => setState(props)}>リセット</button>
    </>
  )
}

App.defaultProps = {
  name: "",
  price: 1000
}

export default App;
