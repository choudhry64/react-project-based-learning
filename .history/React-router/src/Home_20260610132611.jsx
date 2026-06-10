import { useNavigate } from 'react-router-dom'
import React from 'react'

function Home() {
    const navigate = useNavigate();
    function goToAbout(){
        navigate("/abou")
    }
  return (
    <>
      <div>this is home page</div>
      <button onClick={goToAbout}>Go to About </button>
    </>
  
    
  )
}

export default Home