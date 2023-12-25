import React from "react";
import { Link } from "react-router-dom";
import {useLogout} from "../hooks/useLogout"
import { useAuthContext } from "../hooks/useAuthContext";
// import { Nav } from 'react-bootstrap'

const Navbar = () => {

  const {logout} = useLogout()
  const { user } = useAuthContext()


  const handleClick = () => {
    logout()
  }
  return (
    <header>
      <div className="container">
        <Link to="/">
          <h1>Expense Tracker</h1>
        </Link>

        <Link to="/dashboard">
          <h4>Dashboard</h4>
        </Link>
        <Link to="/income">
          <h4>Income</h4>
        </Link>
        <Link to="/expense">
          <h4>Expense</h4>
        </Link>
        {/* <Link to="/login">
          <h4>Login</h4>
        </Link>
        <Link to="/signup">
          <h4>Signup</h4>
        </Link> */}
        <nav>
          {user && (

          <div>
            <span>{user.email}</span>
            <button onClick={handleClick}>Log Out</button>
          </div>
          )}

          {!user && (

          <div>
            <Link to="/login">Login</Link>
            <Link to="/signup">Signup</Link>
          </div>
          )}
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
