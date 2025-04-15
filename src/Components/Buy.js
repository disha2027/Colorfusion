import React,{useState} from 'react'
import axios from 'axios';
import { useParams } from 'react-router-dom/cjs/react-router-dom.min'
const uid= localStorage.getItem('user');
console.log(uid)
    

const Buy = () => {
    const {id} =useParams()
    console.log(id)
    const [qty,setQty] = useState('')

    const handleChange =(e) =>{
        setQty(e.target.value)
        console.log(e.target.value)
    }
     const OrderSubmit = (e)=>{
        e.preventDefault();
        axios.post(`http://localhost:3001/buy/`,{
            qty:qty,
            uid:uid,
            id:id
        }).then((response)=>{
            //console.log(response)
            alert("Ordered Successfully")
            window.location="http://localhost:3000/userhome"
        })
        .catch(error =>{
            console.log(error)
        })
     }


  return (
    <div>
      <div className='container'>
        <div className='row'>
            <form onSubmit={OrderSubmit}>
                <h4>Enter Quantity</h4>
                <input type='number' className='form-control' name='quantity' max={10} min={1} required onChange={handleChange}/>
                <p><button className='btn btn-primary' type='submit'>Buy</button></p>
            </form>
        </div>
      </div>
    </div>
  )
}

export default Buy
