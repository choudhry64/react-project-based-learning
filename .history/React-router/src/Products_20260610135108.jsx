import React from 'react'
import { Link, Outlet } from 'react-router-dom'

function Products() {
  return (
    <>
    <h2>Products pages</h2>
    <nav>
            <Link to={"/phone"}>Phone</Link>
            <Link to={"/laptop"}>Laptop</Link>

            <Outlet/>
    </nav>
    
    </>
  )
}

export default Products