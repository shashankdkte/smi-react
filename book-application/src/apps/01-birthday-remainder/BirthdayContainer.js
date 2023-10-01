import React, { useState } from 'react'
import { data } from './person'
import ListPerson from './ListPerson';
import "./style.css";

function BirthdayContainer() {
  const [people, setPeople] = useState(data);
  return (
    <div className='birthday-container'>
      <h2>Do wish these {people.length} people</h2>
      <ul>
      {
        people.map(person => <ListPerson  person={person}/>)
      }
      </ul>
      <button onClick={()=>setPeople([])}>Clear List</button>
    </div>
  )
}

export default BirthdayContainer