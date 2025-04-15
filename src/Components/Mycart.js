import React,{useState,useEffect} from 'react';
import { useParams} from 'react-router-dom';
import axios from 'axios'
let OrderAmount='0'

const Mycart = () => {
    const { id } = useParams();
    const [MycartData, setMycartData] = useState([])
  useEffect(() => {
     getMycart();
  })
  const getMycart = async() =>{
      const result = await axios.get(`http://localhost:3001/mycart`);
     setMycartData(result.data)
  }
  const DeleteMycart=id=>{
    axios.delete(`http://localhost:3001/delmycart/${id}`)
    .then(response=>{
        getMycart()
    })
}
  return (
    <div>
      <div className='container'>
            <h4 className='m-3 text-center'>Mycart</h4>
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
                      MycartData.map((data,index) => {
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
                                <td><button className='btn btn-danger'  onClick={() =>DeleteMycart(id)}><i class="fa fa-trash" ></i></button></td>
                               
                            </tr>)
                        })
                    }
                    <tr>
                        <td></td>
                        <td></td> 
                        <td></td>
                        <td></td>
                        <td></td>
                        <td>₹{OrderAmount=MycartData.reduce((total,item)=>total+(item.total),0)}</td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                    </tr>
                </tbody>
            </table>
            <p><button className='btn btn-warning' fs-5 fw-bold><a href={`paybill_next/${OrderAmount}`} style={{textDecoration:"none",color:"white"}}>Place Order</a></button></p>
        </div>
     

    </div>
  )
}

export default Mycart
