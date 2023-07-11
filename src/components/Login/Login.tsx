import React from 'react'

function Login() {
  return (
    <div className='row'>
        <div className='col-6 '>
            
        </div>

        {/* login form */}
        <div className='col-6 p-5'>

            <h3>Login</h3>
            <hr /><br />
            <div className="mb-3">
                <label  className="form-label">User Name</label>
                <input type="text" className="form-control" id="formGroupExampleInput"/>
            </div>

            <div className="mb-3">
                <label className="form-label">Password</label>
                <input type="Password" className="form-control" id="formGroupExampleInput2"/>
            </div>

            <div className="d-grid gap-2">
                <button className="btn btn-primary" type="button">Submit</button>
            </div>

        </div>
        {/* login form end here */}
        
        
    </div>
    
  )
}

export default Login