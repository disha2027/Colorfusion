import React, {useState,useEffect} from 'react'
import axios from 'axios';
import { useParams } from 'react-router-dom';
import './Home.css';
const uid=localStorage.getItem('user');
// import b1 from "../Assets/b1.jpg"
// import b2 from "../Assets/b2.jpg"
// import b3 from "../Assets/b3.jpg"
// import b4 from "../Assets/b4.jpg"


const Catwise = () => {
    const {cat} = useParams()
    // console.log(cat)

        const [CatwiseData, setCatwiseData] = useState([])
        useEffect(() => {
            getCatwise();
        })
        const getCatwise = async() =>{
            //alert(cat)
            const result = await axios.get(`http://localhost:3001/catwise/${cat}`);
            setCatwiseData(result.data)
        };

        const Addcart= id =>{
            // e.preventDefault();
            //alert (id)
            axios.post(`http://localhost:3001/addcart/${id}/${uid}`, {
            }).then((response) =>{
                console.log(response);
                alert("Added to cart successfully")
                window.location="http://localhost:3000/userhome"
            })
            .catch(error => [
                console.log(error)
            ])
        }
  return (
    <div>
     
     

      <div className="container mt-5">
        <div className="row">

            <h1 className='text-center'> Our Latest Products </h1>
            <p className='mt-3'> </p>
           
            {
                        CatwiseData.map((data,index) => {
                            return (
                                <div className='col-lg-3'>
                                    <div className='border borderd p-4 m-1' >

                                    <p key={data.id}></p>
                                    <p><img src={`../upload/${data.image}`} alt='not found' width={200} height={250}/></p>
                                    <p>{data.product_name}</p>
                                    <p>&#8377;{data.price}</p>
                                    <p>{data.description}</p>
                                    <p><button className='btn btn-warning fw-bold text-dark' style={{width:"150px",fontSize:"18px"}} onClick={()=> Addcart(data.id)}>Add Cart</button></p>
                                    <button className='btn btn-success fw-bold text-dark' style={{width:"100px",fontSize:"18px" ,marginLeft:"10px"}}>
                                    <a href={`/buy/${data.id}`} style={{textDecoration:"none",color:"white"}}>Buy</a></button>   
                                    </div>
                                    </div>

                            )
                        })
                    }
            
              
            </div>
    </div>
    </div>
  )
}

export default Catwise
