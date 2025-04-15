import React, {useState,useEffect} from 'react'
import axios from 'axios'

const Myorder = () => {
  
  const [MyorderData, setMyorderData] = useState([])
  useEffect(() => {
      getMyorder();
  })
  const getMyorder = async() =>{
      const result = await axios.get(`http://localhost:3001/myorder`);
     setMyorderData(result.data)
  
  }
   
  return (
    <div>
      <div className='container'>
            <h4 className='m-3 text-center'>Myorders</h4>
            <table className='table table-bordered'>
                <thead className='table-success text-center'>
                    <tr>
                        <th>Id</th>  
                        <th>user_id</th> 
                        <th>pid</th>
                        <th>qty</th>
                        <th>price</th>
                        <th>total</th>
                        <th>order_date</th>
                        <th>order_time</th>
                        <th>order_status</th>
                        <th>payment_status</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                {
                       MyorderData.map((data,index) => {
                            return (<tr key={data.id}>
                                <td>{index+1}</td>
                                <td>{data.user_id}</td>
                                <td>{data.pid}</td>
                                <td>{data.qty}</td>
                                <td>{data.price}</td>
                                <td>{data.total}</td>
                                <td>{data.order_date}</td>
                                <td>{data.order_time}</td>
                                <td>{data.order_status}</td>
                                <td>{data.payment_status}</td>
                                <td><a href={`/paybill/${data.id}/${data.price}`}>pay now</a></td>
                            </tr>)
                        })
                    }
                </tbody>
            </table>

        </div>
                
    </div>
  )
}

export default Myorder
