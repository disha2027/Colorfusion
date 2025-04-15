import React, { useState,useEffect } from 'react'
import axios from 'axios'

const Customerorder = () => {
    const [CustOrderData, setCustOrderData] = useState([])
    useEffect(() => {
        getOrders();
    })
    const getOrders = async() =>{
        const result = await axios.get(`http://localhost:3001/adminhome`);
        setCustOrderData(result.data)
    }
    const  DeleteOrder=id=>{
        axios.delete(`http://localhost:3001/adminhome/${id}`)
        .then(response=>{
            getOrders()
        })
    }
  return (
    <div><table className='table table-bordered'>
    <thead className='table-primary text-center'>
        <tr>
            <th>Id</th>  
            <th>user_id</th> 
            <th>pid</th>
            <th>qty</th>
            <th>price</th>
            <th>Total</th>
            <th>order_date</th>
            <th>order_status</th>
            <th>payment_status</th>
            <th>Action</th>
        </tr>
    </thead>
    <tbody>
        {
            CustOrderData.map((data,index) => {
                return (<tr key={data.id}>
                    <td>{index+1}</td>
                    <td>{data.user_id}</td>
                    <td>{data.pid}</td>
                    <td>{data.qty}</td>
                    <td>{data.price}</td>
                    <td>{data.total}</td>
                    <td>{data.order_date}</td>
                    <td>{data.order_status}</td>
                    <td>{data.payment_status}</td>
                    <td><button className='btn btn-danger' onClick={() =>DeleteOrder(data.id)}>delete</button></td>
                </tr>)
            })
        }
    </tbody>
</table>

    </div>

  )
}

export default Customerorder
