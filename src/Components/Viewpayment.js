import axios from 'axios';
import React, { useEffect, useState } from 'react'

const ViewPayment = () => {
    const [PaymentData, setPaymentData] = useState([])
    useEffect(() => {
        getPayment();
    })
    const getPayment = async() =>{
        const result = await axios.get(`http://localhost:3001/viewpayment`);
        setPaymentData(result.data)
    }
    const  DeletePayment=id=>{
        axios.delete(`http://localhost:3001/delpay/${id}`)
        .then(response=>{
            getPayment()
        })
    }
  return (
    <div>
        <div className='container'>
            <h4 className='m-3 text-center'>Payment</h4>
            <table className='table table-bordered'>
                <thead className='table-success text-center'>
                    <tr>
                        <th>Id</th>  
                        <th>order_id</th> 
                        <th>amount</th>
                        <th>paid_date</th>
                        <th>month</th>
                        <th>year</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        PaymentData.map((data,index) => {
                            return (<tr key={data.id}>
                                <td>{index+1}</td>
                                <td>{data.order_id}</td>
                                <td>{data.amount}</td>
                                <td>{data.paid_date}</td>
                                <td>{data.month}</td>
                                <td>{data.year}</td>
                                <td><button className='btn btn-danger' onClick={() =>DeletePayment(data.id)}>delete</button></td>
                            </tr>)
                        })
                    }
                </tbody>
            </table>

        </div>
    </div>
  )
}

export default ViewPayment
