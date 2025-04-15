import axios from 'axios';
import React, { useEffect, useState } from 'react'

const ViewFeedback = () => {
    const [FeedbackData, setFeedbackData] = useState([])
    useEffect(() => {
        getFeedback();
    })
    const getFeedback = async() =>{
        const result = await axios.get(`http://localhost:3001/viewfeedback`);
        setFeedbackData(result.data)
    }
    const  DeleteFeedback=id=>{
        axios.delete(`http://localhost:3001/delfee/${id}`)
        .then(response=>{
            getFeedback()
        })
    }
  return (
    <div>
        <div className='container'>
            <h4 className='m-3 text-center'>Feedback</h4>
            <table className='table table-bordered'>
                <thead className='table-success text-center'>
                    <tr>
                        <th>Id</th>  
                        <th>user_id</th> 
                        <th>About product</th>
                        <th>About services</th>
                        <th>Comments</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        FeedbackData.map((data,index) => {
                            return (<tr key={data.id}>
                                <td>{index+1}</td>
                                <td>{data.user_id}</td>
                                <td>{data.about_product}</td>
                                <td>{data.about_services}</td>
                                <td>{data.comments}</td>
                                <td><button className='btn btn-danger' onClick={() =>DeleteFeedback(data.id)}>delete</button></td>
                            </tr>)
                        })
                    }
                </tbody>
            </table>

        </div>
    </div>
  )
}

export default ViewFeedback
