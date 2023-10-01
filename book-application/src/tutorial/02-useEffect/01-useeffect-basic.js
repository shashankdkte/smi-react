import React, { useEffect, useState } from 'react'

function UseEffectBasics() {
  const [value, setvalue] = useState(0);


  useEffect(() => {
    console.log("useEffect called");
  })

  console.log("rendering component");
  return (
    <div>UseEffectBasics</div>
  )
}

export default UseEffectBasics