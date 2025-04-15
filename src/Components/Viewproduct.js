import React from 'react'
import { useState, useEffect } from 'react'
import axios from 'axios'
const ViewProduct = () => {
    const [ProductData, setProductData] = useState([])
    useEffect(() => {
        getProduct();
    })
    const getProduct = async() =>{
        const result = await axios.get(`http://localhost:3001/viewproduct`);
        setProductData(result.data)
    }
    const  DeleteProduct=id=>{
        axios.delete(`http://localhost:3001/delpro/${id}`)
        .then(response=>{
            getProduct()
        })
    }
  return (
    <div>
       <div className='container'>
            <h4 className='m-3 text-center'>Product</h4>
            <table className='table table-bordered'>
                <thead className='table-success text-center'>
                    <tr>
                        <th>Id</th>  
                        <th>category_name</th> 
                        <th>product_name</th>
                        <th>uom</th>
                        <th>qty</th>
                        <th>price</th>
                        <th>description</th>
                        <th>stock</th>
                        <th>image</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        ProductData.map((data,index) => {
                            return (<tr key={data.id}>
                                <td>{index+1}</td>
                                <td>{data.category_name}</td>
                                <td>{data.product_name}</td>
                                <td>{data.uom}</td>
                                <td>{data.qty}</td>
                                <td>{data.price}</td>
                                <td>{data.description}</td>
                                <td>{data.stock}</td>
                                <td>{data.image}</td>
                                <td><button className='btn btn-danger' onClick={() =>DeleteProduct(data.id)}>delete</button></td>
                            </tr>)
                        })
                    }
                </tbody>
            </table>

        </div>

    </div>
  )
}

export default ViewProduct
