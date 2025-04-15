import React,{useState} from 'react'
import axios from 'axios'
const Payment = () => {
    const initialValues = {order_id:'',amount:'',paid_date:''}
    const [formValues,setFormValues] = useState(initialValues)
    const handleChange = (e) =>{
        const {name,value}= e.target
        setFormValues({...formValues,[name]: value}) 
        //console.log(formValues)
        console.log(formValues.fname)
    }
    const formPayment=(e)=> {
        e.preventDefault();
    axios.post("http://localhost:3001/pay",{
        Paymentdata:formValues
    }).then((response) =>{ 
        console.log(response)
        alert("payment successfull")
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
                <h5 className='text-center m-2'><strong>Payment</strong></h5>
                <div className=''><hr></hr></div>
                <form onSubmit={formPayment}>
                <div className='p-1 m-1'>
                    <label className='form-label'>Order id</label>
                    <input type='text' className='form-control border border-success' value={formValues.order_id} name='order_id' onChange={handleChange} required/>
                </div>
                <div className='p-1 m-1'>
                    <label className='form-label'>Amount</label>
                    <input type='text' className='form-control border border-success' value={formValues.amount} name='amount' onChange={handleChange} required/>
                </div>
                <div className='p-1 m-1'>
                    <label className='form-label'>Paid date</label>
                    <input type='date' className='form-control border border-success' value={formValues.paid_date} name='paid_date' onChange={handleChange} required/>
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

export default Payment
