import React, { useState } from 'react'
 import bg3 from "../Assets/bg3.jpg"
import logo3 from "../Assets/logo3.png"
import axios from 'axios'
const Login = () => {
  const initialValues = {username:"",password:""}
  const[formValues,setFormValues] =useState(initialValues)
  const[loginStatus,setLoginStatus] =useState('') 
  
  const handleChange =(e) =>{
    const {name,value}= e.target
    setFormValues({ ...formValues,[name]:value});
    console.log(formValues.username)
  }
  const FormLogin=(e)=>{
    //console.log(formValues)
    //const logindata = JSON.stringify(formValues)
    console.log(formValues.username)
    e.preventDefault();
    axios.post("http://localhost:3001/login",{
      logindata:formValues

    }).then((response) =>{
      console.log(response);
      if(response.data.length>0)
        {
          let utype=response.data[0].utype
          setLoginStatus('')
          localStorage.setItem('user',formValues.username)
          localStorage.setItem('log',utype)
          if(utype==="user")
            {
              window.location = 'http://localhost:3000/userhome';
            }
            if(utype==="admin")
              {
                window.location = 'http://localhost:3000/adminhome';
              }
            }
            else
            {
              //setLoginStatus(response.data[0].username)
              setLoginStatus('Sorry...! Invalid username or password')
      }
    })
    .catch(error => {
      console.log(error)
    })
    }
  
  return (
      <div className='border border-2  p-3 shadow shadow-2' style={{backgroundImage: `url(${bg3})`, width:1220,backgroundSize:'cover'}}>
      <div className="container mt-5 border rounded  mt-5 p-3 shadow shadow-2">
        <div className="row  p-5">
         <h1 className='text-center'><u>Login</u></h1>
         <div className='col-lg-2'></div>
       <div className="col-lg-4 mt-5 p-3">
         <form onSubmit={FormLogin}>  
        <div className="mt-3">
          <label><strong>Email :</strong></label>
          <input type="email" class="form-control" id="email" placeholder="Enter email" name="username" value={formValues.email}  onChange={handleChange} required/>
        </div>
        <div className="mb-3 mt-3">
          <label><strong>Password :</strong></label>
          <input type="password" class="form-control" id="pwd" placeholder="Enter password" name="password" value={formValues.password}  onChange={handleChange} required/>
        </div>
        <button className='btn btn-primary m-1'>Login</button>
        <div className="form-check mb-3">
          <label className="form-check-label">
            <input className="form-check-input" type="checkbox" name="remember" /> Remember me
          </label>
          <p className='mt-3'>Forgot Password? <span className='text-primary'>Get help with logging in</span></p>
                <hr className='m-4'></hr>
                <p className='m-3 text-center'>Don't have an account? <button className='btn btn-primary m-1'><a href='/signup' className='nav-link'>Sign up</a></button></p>
        </div>
        {/* <button type="submit" className=" m-3 p-1 btn btn-success"><a href="#"className="nav-link">Login</a></button>
        <button type="register" className="m-3 p-1 btn btn-primary"><a href="#" className="nav-link" >Sign up</a></button> */}
      </form>
      <p className='text-danger'>{loginStatus}</p>
      <p className='text-primary'><a href={`/forgotpass/`}>Forgot Password?</a></p>

      </div>
      <div className="col-lg-4">
<img src={logo3} width={500} height={600} alt='not found'></img>
      </div>
      <div className='col-lg-2'></div>
  </div>
</div>
     </div>
  )
}

export default Login
