import axios from 'axios'
import { type } from 'os'
import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'

function Admin_home() {

  // user list state
  const [user,setUser] = useState<any[]>([])

  let navigate = useNavigate()

  // api call for user list
  useEffect(()=> {
    console.log("admin home")
    let token = localStorage.getItem('authTokens')
    if (token) {
      axios({
        url:'http://127.0.0.1:8000/api/admin/user_list/',
        headers: {
          Authorization: "Bearer " + JSON.parse(token)
        }
      })
      .then((response)=> {
        console.log(response.data)
        setUser(response.data)

      })
      .catch((error)=> {
        console.log("somthing went wrong")
      })
    }


  },[])

  // delete user
  let delete_user =(user_id: number)=>{
    // api call for user delete
    let token = localStorage.getItem('authTokens')

    if (token) {
      axios({

        url:`http://127.0.0.1:8000/api/admin/delete_user/${user_id}`,
        method:"DELETE",
        headers:{
          Authorization: "Bearer " + JSON.parse(token)
        }
      })
      .then((response)=>{
        console.log("deleted")
        console.log(response.data)
        setUser(user.filter(obj=>{
          return obj.id != user_id
        }))
      })
      .catch((error)=> {
        console.log("somthing went wrong")
      })

    }
    
  }



  return (
    
    <div className='px-3'>

        <div className='row mt-4'>
          <h3>User details</h3>
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
            <button type="button" onClick={()=>navigate("/admin_adduser")} className="btn btn-primary">Create user</button>
            
            <table className="table">
                <thead>
                    <tr>
                        <th scope="col">Id</th>
                        <th scope="col">User name</th>
                        <th scope="col">First name</th>
                        <th scope="col"></th>
                        <th scope="col"></th>

                    </tr>
                </thead>
                <tbody>
                    {
                      user.map((value)=> {
                        return(
                          <tr>
                              <th scope="row">{value.id}</th>
                              <td>{value.username}</td>
                              <td>{value.first_name}</td>
                              <td>
                                  <button type="button" onClick={()=>navigate("/admin_edituser")} className="btn btn-primary">Edit</button>
                              </td>
                              <td>
                                <button type="button" onClick={()=>delete_user(value.id)} className="btn btn-primary">Delete</button>
                                  
                              </td>
                          </tr>
                        )
                      })


                    }
                    
                   
                </tbody>
            </table>
            
           </div>

        </div>
      </div>

  )
}

export default Admin_home