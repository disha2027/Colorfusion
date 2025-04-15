import React, { useEffect, useState } from 'react'
import axios from 'axios'
const ViewRegistration = () => {
    const [signupdata, setSignupData] = useState([])
    
    useEffect(() => {
        getSignup();
    })
    const getSignup = async() =>{
        const result = await axios.get(`http://localhost:3001/viewsignup`);
        setSignupData(result.data)
    }
    const  DeleteSignup=id=>{
        alert(id)
        axios.delete(`http://localhost:3001/delreg/${id}`)
        .then(response=>{
            getSignup()
        })
    }
    return (
        <div>
            <div className='container'>
                <h4 className='m-3 text-center'>Registration</h4>
                <table className='table table-bordered'>
                    <thead className='table-success text-center'>
                        <tr>
                            <th>Id</th>
                            <th>Firstname</th>
                            <th>Lastname</th>
                            <th>DOB</th>
                            <th>Gender</th>
                            <th>Pincode</th>
                            <th>Adress</th>
                            <th>Email</th>
                            <th>mobile_no</th>
                            <th> Action </th>
                        </tr>
                    </thead>
                    <tbody>
                        {signupdata.map((data, index) => (
                            <tr key={data.id}>
                                <td>{index + 1}</td>
                                <td>{data.fname}</td>
                                <td>{data.lname}</td>
                                <td>{data.dob}</td>
                                <td>{data.gender}</td>
                                <td>{data.pincode}</td>
                                <td>{data.address}</td>
                                <td>{data.email}</td>
                                <td>{data.mobile_no}</td>
                                <td><button className='btn btn-danger' onClick={() =>DeleteSignup(data.id)}>delete</button></td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
    
}

export default ViewRegistration
