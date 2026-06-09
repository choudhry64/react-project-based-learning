import { useState } from 'react'

import './App.css'
import Hello from './Hello'

function App() {
  // const [count, setCount] = useState(0)
  const hobbies = ["Reading", "Writing", "Music", "Dnancing"];


  return (
    <>
     <Hello name = "sachin" age = {24} education = {12} hobbies = {hobbies}/>
    </>
  )
}

export default App
