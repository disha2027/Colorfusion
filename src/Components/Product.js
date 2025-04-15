import React, {useState,useEffect} from 'react';
import axios from 'axios';
const Product = () => {

    const [CatList, setCatList] = useState([])
    //const utype=localStorage.getItem('log')
    useEffect(() => { 
        getCategory();
      }, []);
  
      const getCategory = async() => {
        const result = await axios.get("http://localhost:3001/viewcategory");
        setCatList(result.data);
        console.log(result.data);
      };

    const initialValues = {category_name:'',product_name:'',uom:'',qty:'',price:'',description:'',stock:''}
    const [formValues,setFormValues] = useState(initialValues)
    const[file,setFile]=useState('')

    const handleChange = (e) =>{
        const {name,value}= e.target 
        setFormValues({...formValues,[name]: value}) 
        //console.log(formValues)
        console.log(formValues.fname)
    }

    const setImgFile = (e) =>
        {
           // console.log(e.target.files[0])
            setFile(e.target.files[0])
        }
    
        const submitProduct=(e)=>{
            e.preventDefault();
            var formData = new FormData();
            formData.append("file",file)
            formData.append("category_name",formValues.category_name)
            formData.append("product_name",formValues.product_name)
            formData.append("uom",formValues.uom)
            formData.append("qty",formValues.qty)
            formData.append("price",formValues.price)
            formData.append("description",formValues.description)
            formData.append("stock",formValues.stock)
            console.log(...formData)
            const config = {
                headers:
                {
                    "Content-Type":"multipart/form-data"
                }    
             }
            axios.post("http://localhost:3001/pro",
            formData,config
            ).then((response)=>{
              console.log(response);
              alert("Added Successfully");
              window.location='http://localhost:3000/product/'
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
                <h5 className='text-center m-2'><strong>Product</strong></h5>
                <div className=''><hr></hr></div>
                <form onSubmit={submitProduct}>
                <div className='p-1 m-1'>
                    <label className='form-label'>Category name</label>
                    <select name='category_name' className='form-control' defaultValue={formValues.category_name} onChange={handleChange}>
                        <option>--Select Category--</option>
                        {
                            CatList.map((cat,index) =>{
                                return(
                                    <option key={cat.id} value={cat.category_name}>{cat.category_name}</option>
                                )
                            })
                        }
                    </select>
                </div>
                <div className='p-1 m-1'>
                    <label className='form-label'>Product name</label>
                    <input type='text' className='form-control border border-success' value={formValues.product_name} name='product_name' onChange={handleChange} required/>
                </div>
                <div className='p-1 m-1'>
                    <label className='form-label'>Uom</label>
                    <input type='text' className='form-control border border-success' value={formValues.uom} name='uom' onChange={handleChange} required/>
                </div>
                <div className='p-1 m-1'>
                    <label className='form-label'>Qty</label>
                    <input type='text' className='form-control border border-success' value={formValues.qty} name='qty' onChange={handleChange} required/>
                </div>
                <div className='p-1 m-1'>
                    <label className='form-label'>Price</label>
                    <input type='text' className='form-control border border-success' value={formValues.price} name='price' onChange={handleChange} required/>
                </div>
                <div className='p-1 m-1'>
                    <label className='form-label'>Description</label>
                    <input type='text' className='form-control border border-success' value={formValues.description} name='description' onChange={handleChange} required/>
                </div>
                <div className='p-1 m-1'>
                    <label className='form-label'>Stock</label>
                    <input type='text' className='form-control border border-success' value={formValues.stock} name='stock' onChange={handleChange} required/>
                </div>
                <div className='p-1 m-1'>
                    <label className='form-label'>Image</label>
                    <input type='file' className='form-control border border-success'  name='file' onChange={setImgFile} required/>
                </div>
                <div className='p-1 m-1'>
                    <button className='btn btn-success' type='submit'>Submit</button>
                </div>
</form>
</div>
</div>
</div>
</div>

  )
}

export default Product
