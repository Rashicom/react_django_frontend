import userEvent from '@testing-library/user-event'
import axios from 'axios'
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

function Admin_login() {

    const navigate = useNavigate()

    // state for login credencials
    const [admin,setAdmin] = useState({username:'',password:''})

    // admin login
    let admin_login = ()=>{
        // api call for admin login
        axios({
            url: 'http://127.0.0.1:8000/api/admin/login/',
            method:"POST",
            headers: {
                "Content-type":"application/json"
            },
            data: JSON.stringify(admin)
        })
        .then((response)=> {
            console.log(response.status)
            localStorage.setItem('authTokens', JSON.stringify(response.data.access))
            navigate("/admin_home")
        })
        .catch(()=>{
            // handle error message
            console.log("somthing went wrong")
        })
    }


  return (
    
    <div className='row'>
        <div className='col-6 '>
            
        </div>

        {/* login form */}
        <div className='col-6 p-5'>

            <h3>Admin Login</h3>
            
            <hr /><br />
            <div className="mb-3">
                <label  className="form-label">User Name</label>
                <input type="text" onChange={(e)=>setAdmin({...admin,username:e.target.value})} className="form-control" id="formGroupExampleInput"/>
            </div>

            <div className="mb-3">
                <label className="form-label">Password</label>
                <input type="Password" onChange={(e)=>setAdmin({...admin,password:e.target.value})} className="form-control" id="formGroupExampleInput2"/>
            </div>

            <div className="d-grid gap-2">
                <button onClick={admin_login} className="btn btn-primary" type="button">Submit</button>
            </div>

        </div>
        {/* login form end here */}
        
        
    </div>

  )
}

export default Admin_login