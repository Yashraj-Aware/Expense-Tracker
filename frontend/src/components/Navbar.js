import React from 'react'
import { Link } from "react-router-dom"
// import { Nav } from 'react-bootstrap'



const Navbar = () => {
  return (
    <header>
        <div className="container">
            <Link to="/dashboard">
                <h1>Expense Tracker</h1>
            </Link>
            <Link to = "/dashboard">
              <h4>Dashboard</h4>
            </Link>
            <Link to = "/income">
              <h4>Income</h4>
            </Link>
            <Link to = "/expense">
              <h4>Expense</h4>
            </Link>

            <Link to = "/login">
              <h4>Login</h4>
            </Link>
            
        </div>
    </header>

  )
}

export default Navbar
