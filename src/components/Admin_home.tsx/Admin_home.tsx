import React from 'react'

function Admin_home() {
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
            <button type="button" className="btn btn-primary">Create user</button>

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
                    <tr>
                        <th scope="row">1</th>
                        <td>username</td>
                        <td>firstname</td>
                        <td>
                            <button type="button" className="btn btn-primary">Edit</button>
                        </td>
                        <td>
                            <button type="button" className="btn btn-primary">Activate</button>
                        </td>

                    </tr>
                   
                </tbody>
            </table>
            
           </div>

        </div>
      </div>

  )
}

export default Admin_home