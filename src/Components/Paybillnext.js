import React from 'react'
import { useParams} from 'react-router-dom';
import axios from "axios";
import pay1 from "../Assets/pay1.jpg"

let uid=localStorage.getItem('user')
    const PayBillNext = () => {
        const {price} = useParams();
        console.log(price)
    
        const paymentHandler = async (e) => {
            e.preventDefault();
    
            var options={
              key:"rzp_test_FyO9cJN8odIXtW",
              key_secret:"LEtWnqDwGOl376GWZcKaaqY4",
              amount:price*100,
              currency:"INR",
              name:"COLORFUSION",
              description:"For testing purpose",
              handler:function(response){
                //alert(response.razorpay_payment_id)
                axios.post(`http://localhost:3001/paybill_next/${price}`,{
                  price:price,
                  payment_id:response.razorpay_payment_id,
                  uid:uid
                 }).then((response)=>{
                   console.log(response);
                   alert("Payment has been done successfully")
                   window.location="http://localhost:3000/mycart"
                 })
                 .catch(error => {
                     console.log(error)
                 })
              },
              prefill:{
                name:"Disha Bhat",
                email:"dishabhat47@gmail.com",
                contact:"7676140518",
              },
    
              notes:{
                address:"Razorpay Corporate Office",
              },
              theme:{
                color: "#686CFD",
              }
            };
            var pay=new window.Razorpay(options);
            pay.open()
    
           
      };
  return (
    <div className='mt-2'>
      <div className='container mt-3'>
            <div className='row'>
                <div className='col-lg-6'>
                    <h1> Pay Order Bill Amount </h1>
                    <button onClick={paymentHandler} className='btn btn-primary m-2' style={{width:"200px"}}>Pay Now</button>
                </div>

                <div className='col-lg-6'>
                    <p> <img src={pay1} style={{width:"100%",height:"200px"}} alt='not found' /></p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default PayBillNext
