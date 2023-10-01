import React, { useState } from 'react'
import { data } from '../utils/data'

function ArrayState() {
  const [items, setItems] = useState(data);

  function removeItem(id) {
    console.log(id);
    setItems((items)=> items.filter(item => item.id !== id))
  }

  return (
    <>
    <div>
      {items.map(item => <div key={item.id}  onClick={()=>{removeItem(item.id)}} className='item'>{item.personName}</div>)}
    </div>
    <button onClick={()=>setItems([])}>Clear Items</button>
    </>
  )
}

export default ArrayState