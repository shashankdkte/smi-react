import React, {useState} from 'react';


function ErrorExample() {
  const [text, setText] = useState('Random Title');

  function handleClick() {
    if (text === "Random Title")
    {
      setText("hello world")
    }
    else
    {
      setText("Random Title")
    }
  }
  return (
    <div>
      <h2>{text}</h2>
      <button onClick={handleClick}>Change title</button>
    </div>
  )
}

export default ErrorExample