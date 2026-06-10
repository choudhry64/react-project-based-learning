import { useNavigate } from 'react-router-dom'
import React from 'react'

function Home() {
    function goToAbout(){
        const navigate = useNavigate();
    }
  return (
    <>
      <div>this is home page</div>
      <button>Go to About </button>
    </>
  
    
  )
}

export default Home