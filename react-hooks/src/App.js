import React,{ useState } from 'react'

const App = () => {
  const [count, setCount] = useState(0)
  const incriment = () => setCount(count+1)
  const decriment = () => setCount(count-1)
  const reset = () => {setCount(0)}
  const dubble = () => {setCount(count * 2)}
  const threeDivision = () => count % 3 === 0 ? setCount(count/3) : count

  return (
    <>
      <p>count{count}</p>
      <button onClick={incriment}>+</button>
      <button onClick={decriment}>-</button>
      <button onClick={dubble}>×2</button>
      <button onClick={reset}>reset</button>
      <button onClick={threeDivision}>3の倍数の時だけ3で割る</button>
    </>
  );
}

export default App;
