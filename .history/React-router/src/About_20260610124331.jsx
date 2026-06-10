import React, { useState } from 'react'

function About() {
    const [count, setCount] = useState(0);
  return (
    <>
    <h1>{count}</h1>
    <button></button>
    </>
  )
}

export default About