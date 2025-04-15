import React from 'react';
import './adminhome.css';
import Customerorder from './Customerorder';
const AdminHome = () => {
    

  return (
    <div>  
        <div className='container-fluid'>
         <div className='row'>
                <div className='col-lg-2 text-light' style={{backgroundColor:"darkslateblue"}} >
                <nav className='col-sm-2'>
                <ul className='navbar-nav'>
                            <li className='nav-item m-1'>
                                <a  href='/adminhome' className='nav-link m-1 text-light' id='sidebar'>Home</a>
                            </li>
                            <li className='nav-item m-1 dropdown'>
                                <a  href='/adminhome' className='nav-link m-1 text-light dropdown-toggle' role='button' data-bs-toggle="dropdown" id='sidebar'>Category</a>
                                <ul className='dropdown-menu'>
                                    <li><a className='dropdown-item' href='/category'>Add</a></li>
                                    <li><a className='dropdown-item' href='/viewcategory'>view</a></li>
                                </ul>
                            </li>
                            <li className='nav-item m-1 dropdown'>
                                <a  href='/adminhome' className='nav-link m-1 text-light dropdown-toggle' role='button' data-bs-toggle="dropdown" id='sidebar'>Products</a>
                                <ul className='dropdown-menu'>
                                    <li><a className='dropdown-item' href='/product'>Add</a></li>
                                    <li><a className='dropdown-item' href='/viewproduct'>view</a></li>
                                </ul>
                            </li>
                            <li className='nav-item m-1'>
                                <a  href='/viewfeed' className='nav-link m-1 text-light' id='sidebar'>Feedback</a>
                            </li>
                            <li className='nav-item m-1'>
                                <a  href='/' className='nav-link m-1 text-light' id='sidebar'>Reviews</a>
                            </li>
                            
                        </ul>
                        </nav>
                </div>
                {/* <nav className='navbar navbar-expand-lg'> */}
                        
                       <div className='col-lg-10' >
                        <div className='row p-3 flex-nowrap '>
                            <div className='col-lg-3 shadow' id='box'>
                            <i className='fa fa-user p-3 fs-2 text-warning'></i>
                            <p>2500</p>
                            <p>Welcome</p>
                            </div>

                            <div className='col-lg-3 shadow' id='box'>
                            <i className='fa fa-clock-o p-3 fs-2'></i>
                            <p>123.50</p>
                            <p>Average Time</p>
                            </div>

                            <div className='col-lg-3 shadow' id='box'>
                            <i className='fa fa-cloud-download p-3 fs-2 text-success'></i>
                            <p>1,805</p>
                            <p>Collections</p>
                            </div>

                            <div className='col-lg-3 shadow' id='box'>
                            <i className='fa fa-comments p-3 fs-2 text-danger'></i>
                            <p>150</p>
                            <p>Comments</p>
                            </div>
                                  </div>

                                  <div className='row m-3'>
                                  <h4 className='m-3 text-center'>Customer Order</h4>
                                  <Customerorder></Customerorder>
            

                                  </div>
                        
                    {/* </nav> */}
                </div>
      
         </div>
        </div>
    </div>
    
  )
}

export default AdminHome
