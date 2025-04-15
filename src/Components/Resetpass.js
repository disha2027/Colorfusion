import React, { useState } from 'react'
import axios from 'axios'

const uid=localStorage.getItem('user')
const ResetPass = () => {
    const[newpass,setNewpass]=useState('')
    const[confirmpass,setConfirmpass]=useState('')
    
    const handleChange = (e) =>{
        //const {name,value}=e.target
        setNewpass(e.target.value);
    }
    const ResethandleChange = (e) =>{
        //const {name,value}=e.target
        setConfirmpass(e.target.value);
    }
    const ResetFormSubmit = (e) =>{
        e.preventDefault();
        if(newpass===confirmpass)
        {
axios.post("http://localhost:3001/resetpass",{
  newpass:newpass,
  confirmpass:confirmpass,
  uid:uid
}).then((response)=>{
  window.location="http://localhost:3000/login/"
  //console.log(response);
})
.catch(error => {
  console.log(error)
})
        }
        else{
          alert("New password and confirm password must be same")
        }
}
  return (
    <div>
        <div className='container-fluid'>
            <div className='row'>
                <div className='col-lg-4'></div>
                <div className='col-lg-4 border border-success shadow m-5 p-3'>
                    <h5 className='text-center m-3'> Reset Password</h5>
                    <hr></hr>
                 <form onSubmit={ResetFormSubmit}>
                     <table>
                           <tbody>
                                 <tr>
                                     <td><label>New Password</label></td>
                                     <td><input type='password'  value={newpass} onChange={handleChange}required  className='form-control' /></td>
                               </tr>
                           <tr>
               <td><label>Confirm Password</label></td>
               <td><input type='password' value={confirmpass} onChange={ResethandleChange} required  className='form-control' /></td>
            </tr>
            <tr>
                <td></td>
                <td><button className='btn btn-success' type='submit' value='Reset Password'>Reset</button></td>
            </tr>
        </tbody>
      </table>
      </form>
    </div>
    </div>
    </div>
    </div>
  )
}

export default ResetPass
