import React, { useState } from 'react'

function About() {
    const [count, setCount] = useState(0);
  return (
    <>
    <h1>{count}</h1>
    <button onClick={()=> setCount(count + 1)}>Increase</button>
    <button onClick={()=> if (count )setCount(count-1)}>Decrease</button>
    </>
  )
}

export default About