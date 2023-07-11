import React from 'react'

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
            <a className="nav-link active" aria-current="page" href="#">Login</a>
            <a className="nav-link" href="#">Signup</a>
            <a className="nav-link" href="#">Home</a>

          </div>
          
        </div>
      </div>
    </nav>
  )
}

export default NavBar