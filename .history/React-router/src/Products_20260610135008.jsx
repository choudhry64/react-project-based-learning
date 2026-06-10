import React from 'react'
import { Link, ou } from 'react-router-dom'

function Products() {
  return (
    <>
    <h2>Products pages</h2>
    <nav>
            <Link to={"/phone"}>Phone</Link>
            <Link to={"/laptop"}>Laptop</Link>
    </nav>
    
    </>
  )
}

export default Products