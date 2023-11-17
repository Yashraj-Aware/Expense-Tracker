import React from 'react'
import { Link } from "react-router-dom"
import { Nav } from 'react-bootstrap'



const Navbar = () => {
  return (
    <header>
        <div className="container">
            <Link to="/">
                <h1>Expense Tracker</h1>
            </Link>

            <Link to = "/">
              <h4>Signup</h4>
            </Link>
            <Link to = "/">
              <h4>Login</h4>
            </Link>
        </div>
    </header>

  )
}

export default Navbar
