import React from 'react'
import './Home.css'

function Home() {
    return (

      <div className='px-3'>

        <div className='row mt-4'>
          <h2>Profile</h2>
          <hr />
          <div className='col-md-3'>
            <div className="list-group">
              <a href="#" className="list-group-item list-group-item-action active" aria-current="true">
                My profile
              </a>
              <a href="#" className="list-group-item list-group-item-action">My Account</a>
              <a href="#" className="list-group-item list-group-item-action">My Address</a>
              <a href="#" className="list-group-item list-group-item-action">About</a>
              
            </div>
          </div>


          <div className='col-md-9'>
            <div>
              <h1>First Name</h1>
              <hr />
              <div className='profilepicture'>
                <a href="#">
                  <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" className="bi bi-plus-circle" viewBox="0 0 16 16">
                    <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"/>
                    <path d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4z"/>
                  </svg>
                </a>
              </div>
              <input type="file" name="" id="" />
              <button type="button" className="btn btn-primary btn-sm">Submit</button>
              
      
            </div>
          </div>

        </div>
      </div>

     
    );
  }

export default Home