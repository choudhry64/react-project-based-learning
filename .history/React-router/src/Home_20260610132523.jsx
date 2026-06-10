import { useNavigate } from 'react-router-dom'
import React from 'react'

function Home() {
    const navigate = useNavigate();
    function goToAbout(){
        navigate()
    }
  return (
    <>
      <div>this is home page</div>
      <button>Go to About </button>
    </>
  
    
  )
}

export default Home