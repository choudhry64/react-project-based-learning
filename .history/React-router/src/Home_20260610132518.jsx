import { useNavigate } from 'react-router-dom'
import React from 'react'

function Home() {
    const navigate = useNavigate();
    function goToAbout(){
        
    }
  return (
    <>
      <div>this is home page</div>
      <button>Go to About </button>
    </>
  
    
  )
}

export default Home