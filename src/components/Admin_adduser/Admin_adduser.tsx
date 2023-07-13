import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

function Admin_adduser() {

  // state for signup variables
  const [user,setUser] = useState({username:'',first_name:'',password:'',password2:''})
  
  const navigate = useNavigate()
   
    // submit button event: fire submit api
    async function signup_trigg() {
        console.log("signup button clicked")
        console.log(user)
        // fetch request to create new user
        let signup_response = await fetch("http://127.0.0.1:8000/api/signup/", {
            method: "POST",
            headers: {
                "Content-type": "application/json"
            },
            body: JSON.stringify(user)
        })

        let data = await signup_response.json()
        console.log("data:", data)
        navigate("/admin_home")

    }



    return (
    
        <div className='px-3'>
    
            <div className='row mt-4'>
              <h3>Create new user</h3>
              <hr />
              <div className='col-md-3'>
                <div className="list-group">
                  <a href="#" className="list-group-item list-group-item-action active" aria-current="true">
                    User list
                  </a>
                  <a href="#" className="list-group-item list-group-item-action">Account</a>
                  <a href="#" className="list-group-item list-group-item-action">Address</a>
                  <a href="#" className="list-group-item list-group-item-action">About</a>
                  
                </div>
              </div>
    
    
              <div className='col-md-9'>
               
                    <h3>Create</h3>
                  
                  <hr />
                  <div className="mb-3">
                      <label className="form-label">User Name</label>
                      <input type="text" onChange={(e)=>setUser({...user,username:e.target.value})} className="form-control" id="formGroupExampleInput"/>
                  </div>

                  <div className="mb-3">
                      <label className="form-label">First name</label>
                      <input type="text" onChange={(e)=>setUser({...user,first_name:e.target.value})} className="form-control" id="formGroupExampleInput2" />
                  </div>
                  
                  {/* password */}
                  <div className="mb-3">
                      <label className="form-label">Password</label>
                      <input type="password" onChange={(e)=>setUser({...user,password:e.target.value})} className="form-control" id="formGroupExampleInput2" />
                  </div>
                  
                  {/* confirm password */}
                  <div className="mb-3">
                      <label className="form-label">Confirm password</label>
                      <input type="password" onChange={(e)=>setUser({...user,password2:e.target.value})} className="form-control" id="formGroupExampleInput2" />
                  </div>

                  <div className="d-grid gap-2">
                      <button className="btn btn-primary" onClick={signup_trigg} type="button">Submit</button>
                  </div>
               </div>
    
            </div>
          </div>
    
      )
    

}

export default Admin_adduser