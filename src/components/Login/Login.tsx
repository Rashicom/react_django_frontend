import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

function Login() {

    const navigate = useNavigate()

    // state for username and password
    const [user,setUser] = useState({username:'', password:''})

    // sending login request with credencials
    async function login_api() {

        let login_request = await fetch("http://127.0.0.1:8000/api/login/", {
            method: "POST",
            headers: {
                "Content-type":"application/json"
            },
            body:JSON.stringify(user)
        })
        let data = await login_request.json()
        console.log("data:",data)
        
        // checking the responce
        if (login_request.status == 200) {
            // store tocken
            navigate("/home")
        }
        
    }


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
                <input type="text" onChange={(e)=>setUser({...user,username:e.target.value})} className="form-control" id="formGroupExampleInput"/>
            </div>

            <div className="mb-3">
                <label className="form-label">Password</label>
                <input type="Password" onChange={(e)=>setUser({...user,password:e.target.value})} className="form-control" id="formGroupExampleInput2"/>
            </div>

            <div className="d-grid gap-2">
                <button className="btn btn-primary" onClick={login_api} type="button">Submit</button>
            </div>

        </div>
        {/* login form end here */}
        
        
    </div>
    
  )
}

export default Login