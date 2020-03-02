import React,{ useState, useEffect } from 'react'

const App = props => {
  const [state, setState] = useState(props)
  const {name, price} = state

  useEffect(() => {
    console.log("componentDidMounのようにレンダリング後に実行")
  },[name])

  return (
    <>
      <h2>{`${name}は${price}円です`}</h2>
      <ul>
        <li>useEffectはレンダリングの後で実行されている</li>
        <li>stateの変更があったらuseEffectが実行されている</li>
        <li>useEffect(()=>{},[])は最初のレンダリングだけ実行</li>
        <li>useEffect(()=>{},[sample])はsamplのstateが変更があった時だけ実行される</li>
      </ul>
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
