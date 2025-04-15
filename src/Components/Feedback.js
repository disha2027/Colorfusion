import React,{useState} from 'react';
import axios from 'axios';
const Feedback = () => {
    const initialValues = {user_id:'',about_product:'',about_service:'',comments:''}
    const [formValues,setFormValues] = useState(initialValues)
    const handleChange = (e) =>{
        const {name,value}= e.target
        setFormValues({...formValues,[name]: value}) 
        //console.log(formValues)
        console.log(formValues.fname)
    }
    const formFeedback= (e) => {
        e.preventDefault();
        axios.post("http://localhost:3001/fee" ,{
            FeedbackData:formValues
          }).then((Response) => {
            console.log(Response)
            alert("Feedback added successfully")
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
                <h5 className='text-center m-2'><strong>Feedback</strong></h5>
                <div className=''><hr></hr></div>
                <form onSubmit={formFeedback}>
                <div className='p-1 m-1'>
                    <label className='form-label'>User id</label>
                    <input type='text' className='form-control border border-success' value={formValues.user_id} name='user_id' onChange={handleChange} required/>
                </div>
                <div className='p-1 m-1'>
                    <label className='form-label'>About product</label>
                    <input type='text' className='form-control border border-success' value={formValues.about_product} name='about_product' onChange={handleChange} required/>
                </div>
                <div className='p-1 m-1'>
                    <label className='form-label'>About service</label>
                    <input type='text' className='form-control border border-success' value={formValues.about_service} name='about_service' onChange={handleChange} required/>
                </div>
                <div className='p-1 m-1'>
                    <label className='form-label'>Comments</label>
                    <input type='text' className='form-control border border-success' value={formValues.comments} name='comments' onChange={handleChange} required/>
                </div>
                <div className='p-1 m-1'>
                    <button className='btn btn-success' type='submit'>Submit</button>
                </div>
                </form>
            </div>
            <div className='col-lg-3'></div>
        </div>
      </div>
    </div>
  )
}

export default Feedback
