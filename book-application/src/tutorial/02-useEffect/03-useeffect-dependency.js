import React, { useEffect, useState } from 'react'

function UseEffectBasics() {
  const [value, setvalue] = useState(0);


  useEffect(() => {
    if (value >= 1)
    {
      document.title = `Count is ${value}`
    }
    
  },[value])

  console.log("rendering component");
  return (
    <div>
      <p>{value}</p>
      <button onClick={() =>setvalue((prev) => prev + 1)}>Update</button>
    </div>
  )
}

export default UseEffectBasics