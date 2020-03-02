import React,{ useState } from 'react'

const App = props => {
  const [name, setName] = useState(props.name)
  const [price, setPrice] = useState(props.price)

  const reset = () => {
    setPrice(props.price)
    setName(props.name)
  }

  return (
    <>
      <h2>{`${name}は${price}円です`}</h2>
      <input onChange={e => setName(e.target.value)} value={name} />
      <button onClick={() => setPrice(price + 100)}>+100</button>
      <button onClick={reset}>リセット</button>
    </>
  )
}

App.defaultProps = {
  name: "",
  price: 1000
}

export default App;
