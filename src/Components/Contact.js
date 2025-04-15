import React from 'react'
import bg3 from "../Assets/bg3.jpg"
const Contact = () => {
  return (
     <div className='border border-2  p-3 shadow shadow-2' style={{backgroundImage: `url(${bg3})`, width:1220,backgroundSize:'cover'}}>
      <div className='container-fluid'>
        <div className='row'>
          <h3>CONTACT US :</h3>
          <div className='col-lg-2'></div>

          <div className='col-lg-8 m-5'>
              <div className='row'>

                <div className='col-lg-5 shadow shadow-2 border border-2'>
                  <h3>GET IN TOUCH :</h3>
                  <form>

                  <div className='mt-4 mb-4'>
                    <input type='text' className='form-control' name='name' placeholder='name'></input>
                  </div>

                  <div className='mt-4 mb-4'>
                    <input type='email' className='form-control' name='email' placeholder='email'></input>
                  </div>

                  <div className='mt-4 mb-4'>
                    <input type='text' className='form-control' name='phone number' placeholder='phone number'></input>
                  </div>

                  <div className='mt-4 mb-4'>
                    <input type='text'  className='form-control'name='message' placeholder='message'></input>
                  </div>

                  <div className='mt-4 mb-4'>
                    <button className='btn btn-primary'>SUBMIT</button>
                  </div>

                  </form>
                </div>

                <div className='col-lg-4 shadow text-light  pt-2 bg-primary'>
                  <p>CONTACT US :</p>
                  <form>

                  <div className='mt-5 mb-5'>
                    <p><b>ADDRESS :</b> 3793 Deeptimay Ports, New Lakshmidharberg, Maharashtra 518 557, India </p>
                  </div>

                  <div className='mt-5 mb-5   '>
                    <p><b>PHONE :</b>  +91 1111 2222 33</p>
                  </div>

                  <div className='mt-5 mb-5   '>
                    <p><b>EMAIL :</b>colorfusion@gmail.com</p>
                  </div>

                  <div className='mt-5 mb-5   '>
                    <p><b>WEBSITE :</b>www.colorfusion.com</p>
                  </div>
                  
                  </form>
                </div>
                </div>

              </div>
          </div>

          <div className='col-lg-2'></div>

        </div>
    </div>
  )
}

export default Contact
