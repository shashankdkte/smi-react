import React, { useEffect, useState } from 'react'

function UseEffectBasics() {
  const [size,setSize] = useState(window.innerWidth);

  function checkSize()
  {
    setSize(window.innerWidth)
  }
  useEffect(() => {
   window.addEventListener("resize",checkSize)
    
    return () => {
      window.removeEventListener("resize",checkSize)
    }
  },)

  console.log("rendering component");
  return (
    <div>
      <p>{size}</p>
    </div>
  )
}

export default UseEffectBasics