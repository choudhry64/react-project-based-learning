import React from 'react'
import { Link } from 'react-router-dom'

function Products() {
  return (
    <>
    <h2>Products pages</h2>
    <nav>
            <Link to={"/phone"}>Phone</Link>
            
    </nav>
    
    </>
  )
}

export default Products