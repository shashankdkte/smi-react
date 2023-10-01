import React from 'react'

function ListPerson({ person }) {
  const {name,image,age} = person
  return (
    <li >
      <div className='person'>
        <img src={image} alt=""  className='person--img'/>
        <div >
          <p className='person--name'>{name}</p>
          <p className='person--age'>{age} Years</p>
        </div>
      </div>
    </li>
  )
}

export default ListPerson