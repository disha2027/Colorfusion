import axios from 'axios';
import React, { useEffect, useState } from 'react'

const ViewCategory = () => {
    const [CategoryData, setCategoryData] = useState([])
    useEffect(() => {
        getCategory();
    })
    const getCategory = async() =>{
        const result = await axios.get(`http://localhost:3001/viewcategory`);
        setCategoryData(result.data)
    }
    const  DeleteCategory=id=>{
        axios.delete(`http://localhost:3001/delcat/${id}`)
        .then(response=>{
            getCategory()
        })
    }
  return (
    <div>
        <div className='container'>
            <h4 className='m-3 text-center'>Category</h4>
            <table className='table table-bordered'>
                <thead className='table-success text-center'>
                    <tr>
                        <th>id</th>
                        <th>category_name</th>  
                        <th>action</th>
                        
                    </tr>
                </thead>
                <tbody>
                    {
                        CategoryData.map((data,index) => {
                            return (<tr key={data.id}>
                                <td>{index+1}</td>
                                <td>{data.category_name}</td>
                                <td><button className='btn btn-danger' onClick={() =>DeleteCategory(data.id)}>delete</button></td>
                            </tr>)
                        })
                    }
                </tbody>
            </table>

        </div>
    </div>
  )
}

export default ViewCategory
