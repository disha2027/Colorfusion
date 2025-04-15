import React, { useState } from 'react'
import axios from 'axios'

const Registration = () => {
    const initialValues = {fname:'',lname:'',dob:'',gender:'',pincode:'',address:'',email:'',mobile_no:''}
    const [formValues,setFormValues] = useState(initialValues)
    const handleChange = (e) =>{
        const {name,value}= e.target
        setFormValues({...formValues,[name]: value}) 
        //console.log(formValues)
        console.log(formValues.fname)
    }
    const FormSignUp=(e)=> {
        e.preventDefault();
    axios.post("http://localhost:3001/reg",{
        signupdata:formValues
    }).then((response) =>{ 
        console.log(response)
        alert("thankyou for Registration")
        window.location="http://localhost:3000/login"
    })
    .catch(error => {
        console.log(error)
    })
}

  return (
    <div>
       <div className='container'>
        <div className='row'>
            <div className='col-lg-3'></div>
            <div className='col-lg-6 p-3 m-3 border shadow border border-success'>
                <h5 className='text-center m-2'><strong>Registration</strong></h5>
                <div className=''><hr></hr></div>
                <form onSubmit={FormSignUp}>
                <div className='p-1 m-1'>
                    <label className='form-label'>fname</label>
                    <input type='text'  className='form-control border border-success' value={formValues.fname} name='fname' onChange={handleChange} required/>
                </div>
                <div className='p-1 m-1'>
                    <label className='form-label'>lname</label>
                    <input type='text' className='form-control border border-success' value={formValues.lname} name='lname' onChange={handleChange} required/>
                </div>  
                <div className='p-1 m-1'>
                    <label className='form-label'>Dob</label>
                    <input type='date' className='form-control border border-success' value={formValues.dob} name='dob' onChange={handleChange} required/>
                </div>
                <div className='p-1 m-1'>
                    <label className='form-label'>Gender</label>
                    <p><input type='radio' Checked={formValues==='male'} name='gender' value="male"  onChange={handleChange} required/>Male
                    <input type='radio'  Checked={formValues==='female'} name='gender' value="female"  onChange={handleChange} required/>Female</p>
                </div>
                <div className='p-1 m-1'>
                    <label className='form-label'>Pincode</label>
                    <input type='text' className='form-control border border-success' value={formValues.pincode} name='pincode' onChange={handleChange} required/>
                </div>
                <div className='p-1 m-1'>
                    <label className='form-label'>Adress</label>
                    <input type='text' className='form-control border border-success' value={formValues.address} name='address' onChange={handleChange} required/>
                </div>
                <div className='p-1 m-1'>
                    <label className='form-label'>Email</label>
                    <input type='email' className='form-control border border-success' value={formValues.email} name='email' onChange={handleChange} required/>
                </div>
                <div className='p-1 m-1'>
                    <label className='form-label'>Mobile-no</label>
                    <input type='text' className='form-control border border-success' value={formValues.mobile_no} name='mobile_no' onChange={handleChange} required/>
                </div>
                <div className='p-1 m-1'>
                    <button className='btn btn-success' type='submit' >Submit</button>
                </div>
                </form>  
            </div>
            <div className='col-lg-3'></div>
        </div>
      </div>
    </div>
  )
}

export default Registration
