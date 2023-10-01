import React, { useState } from 'react'

function UseStateCounter() {
  const [count, setCount] = useState(0);

  function increaseCount() {
  setCount((prevCount)=> prevCount + 1)
  }
    function decreaseCount() {
  setCount((prevCount)=> prevCount - 1)
  }
  
  function complexIncrease() {
    setTimeout(() => {
      setCount((prevCount)=> prevCount + 1)
       },2000)
  }
    function resetCount() {
  setCount(0)
}
  return (
    <div>
      <h2>{count}</h2>
      <button onClick={increaseCount}>Increase</button>
      <button onClick={complexIncrease}>Complex Increase</button>
      <button onClick={resetCount}>Reset</button>
      <button onClick={decreaseCount}>Decrease</button>
    </div>
  )
}

export default UseStateCounter