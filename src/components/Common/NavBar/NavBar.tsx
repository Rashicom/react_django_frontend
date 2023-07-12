import React from 'react'
import {Link, NavLink} from 'react-router-dom'

function NavBar() {
  return (
    <nav className="navbar navbar-expand-lg bg-primary">
      <div className="container-fluid">

        <h2 className='mx-4'>Django-React</h2>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
          <div className="navbar-nav">
            <Link className="nav-link active" aria-current="page" to={"/"}>Login</Link>
            <Link className="nav-link" to={"signup"}>Signup</Link>
            <Link className="nav-link" to={"home"}>Home</Link>

          </div>
          
        </div>
      </div>
    </nav>
  )
}

export default NavBar