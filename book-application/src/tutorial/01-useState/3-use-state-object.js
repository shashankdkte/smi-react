import React, { useState } from 'react'

function UseStateObject() {
  const [person, setPerson] = useState({
    name: 'Kabuto',
    age: 38,
    message:'Dont worry'
  })


  function changeMessage()
  {
    setPerson((personObj) => {
      return {...personObj,message:'My Lord'}
    })
  }
  return (
    <div>
      <div>{person.name}</div>
      <div>{person.age}</div>
      <div>{person.message}</div>
      <button onClick={changeMessage}>Change Message</button>
    </div>
  )
}

export default UseStateObject