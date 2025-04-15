import React,{useState} from 'react'
import axios from 'axios'
const Category = () => {
  const initialValues = {category_name:''}
    const [formValues,setFormValues] = useState(initialValues)
    const handleChange = (e) =>{
        const {name,value}= e.target
        setFormValues({...formValues,[name]: value}) 
        //console.log(formValues)
        console.log(formValues.fname)
    }
    const formCategory=(e)=> {
        e.preventDefault();
    axios.post("http://localhost:3001/cat",{
        CategoryData:formValues
    }).then((response) =>{ 
        console.log(response)
        alert("thankyou")
        window.location="http://localhost:3000/login"
    })
    .catch(error => {
        console.log(error)
    })
}

  return (
    <div>
      <div className='container'>
        <div className='row'>
            <div className='col-lg-3'></div>
            <div className='col-lg-6 p-3 m-3 border shadow border border-success'>
                <h5 className='text-center m-2'><strong>Category</strong></h5>
                <div className=''><hr></hr></div>
                <form onSubmit={formCategory}>
                <div className='p-1 m-1'>
                    <label className='form-label'>Category name</label>
                    <input type='text' className='form-control border border-success' value={formValues.category_name} name='category_name' onChange={handleChange} required/>
                </div>
                <div className='p-1 m-1'>
                    <button className='btn btn-success' type='submit'>Submit</button>
                </div>
                </form>
            </div>
            <div className='col-lg-3'></div>
        </div>
      </div>
    </div>
  )
}

export default Category
