import React from 'react'

function Signup() {
  return (
    <div className='row'>

        <div className="col-6"></div>

        {/* user registratin form start */}
        <div className="col-6 p-4">

            <h3>Signup</h3>
            <hr />
            <div className="mb-3">
                <label className="form-label">User Name</label>
                <input type="text" className="form-control" id="formGroupExampleInput"/>
            </div>

            <div className="mb-3">
                <label className="form-label">First name</label>
                <input type="text" className="form-control" id="formGroupExampleInput2" />
            </div>
            
            {/* password */}
            <div className="mb-3">
                <label className="form-label">Password</label>
                <input type="password" className="form-control" id="formGroupExampleInput2" />
            </div>
            
            {/* confirm password */}
            <div className="mb-3">
                <label className="form-label">Confirm password</label>
                <input type="password" className="form-control" id="formGroupExampleInput2" />
            </div>

            <div className="d-grid gap-2">
                <button className="btn btn-primary" type="button">Submit</button>
            </div>

        </div>
        {/* user registratin form end here */}


    </div>
  )
}

export default Signup