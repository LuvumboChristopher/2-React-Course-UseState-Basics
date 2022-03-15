import React, { useState } from 'react';

const UseStateBasics = () => {
  const [text, setText] = useState('Ramdom Title')
  const handleClick = ()=> {
    if (text === 'Ramdom Title'){
      setText('Hello World')
    } else {
      setText('Ramdom Title')
    }
  }

  return (
    <>
      <h2>{text}</h2>
      <button type='button'className='btn' onClick={handleClick}> Click Me</button>
    </>
  )
};

export default UseStateBasics;
