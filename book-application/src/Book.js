import React from 'react'

function Book({author,image,title}) {
  return (
    <div className='book'>
      <img src={image}alt={title} className='book--img' />
      <h3 className='book--name'>{title}</h3>
      <p className='author--name'>{author}</p>
    </div>
  )
}

export default Book