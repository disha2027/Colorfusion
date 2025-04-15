import React from 'react'

import logo2 from "../Assets/logo2.png"
import lg2 from "../Assets/lg2.png"
import lg3 from "../Assets/lg3.png"
import f1 from "../Assets/f1.jpg"
import  l1 from "../Assets/l1.jpg"
import p1 from "../Assets/p1.jpg"
import bb2 from "../Assets/bb2.webp"
const UserHome = () => {
  return (
    <div>
      <div className='container p-5'>
            <div id="slider" className="carousel slide" data-bs-ride="carousel">
        
                  <div className="carousel-indicators">
                      <button type="button" data-bs-target="#slider" data-bs-slide-to="0" class="active"></button>
                      <button type="button" data-bs-target="#slider" data-bs-slide-to="1"></button>
                      <button type="button" data-bs-target="#slider" data-bs-slide-to="2"></button>
                      <button type="button" data-bs-target="#slider" data-bs-slide-to="3"></button>
                  </div>
            
            
 
 
            <div className="carousel-inner">
     
                  
 
                  <div className="carousel-item active">
                      <img src={logo2}  alt="Not Found" height={346} width={1000}  className="d-block "/>
                  </div>
     
                  <div className="carousel-item">
                      <img src={lg2} alt="Not Found" height={346} width={1000}   className="d-block  "/>
                  </div>

                  <div className="carousel-item">
                      <img src={lg3} alt="Not Found" height={346} width={1000}  className="d-block  "/>
                  </div>
            </div>
 
            <button className="carousel-control-prev" type="button" data-bs-target="#slider" data-bs-slide="prev">
                <span className="carousel-control-prev-icon"></span>
            </button>
 
            <button className="carousel-control-next" type="button" data-bs-target="#slider" data-bs-slide="next">
                <span className="carousel-control-next-icon"></span>
            </button>
            </div>
            </div>

      <div className="container-fluid mt-5">
        <div className="row">
            <div className="col-lg-3">
              <div className='shadow border border-2 p-3' id='img'>
                <img src={f1} alt='about' width={250} height={250}></img>
                <p>LAKMÉ Complexion Care Face Cream, Beige, 9g & Lakme Perfecting Liquid Foundation, Shell, 27ml, Dewy Finish</p>
                <strike>800₹</strike><p>price:500₹</p>
                <p><button  className="btn btn-success m-3 ">buy</button>
                <button  className="btn btn-primary m-3 ">Add to cart</button></p>
            </div>
            </div>
            
            <div className="col-lg-3">
              <div className='shadow border border-2 p-3' id='img'>
                <img src={l1} alt='about' width={250} height={250}></img>
                <p>Swiss Beauty Hd Matte Pigmented Smudge Proof Lipstick | Creamy Matte Long Stay Lipstick | Fire Pink, 3.4g </p>
                <strike>500₹</strike><p>price:200₹</p>
                <p><button type="buy" className="btn btn-success m-3 ">buy</button>
                <button  className="btn btn-primary m-3 ">Add to cart</button></p>
            </div>
            </div>

            <div className="col-lg-3">
              <div className='shadow border border-2 p-3' id='img'>
                <img src={p1} alt='about' width={250} height={250}></img>
                <p>Imagic HD Mattifying Compact Powder | Lightweight Formula with Oil Control | (8g) (03-BUTTER SCOTCH)</p>
                <strike>800₹</strike><p>price:600₹</p>
                <p><button  className="btn btn-success m-3 ">buy</button>
                <button  className="btn btn-primary m-3 ">Add to cart</button></p>
            </div>
            </div>

            <div className="col-lg-3">
              <div className='shadow border border-2 p-3' id='img'>
                <img src={bb2} alt='about' width={250} height={250}></img>
                <p>The Rare Beauty Liquid Blush Is Just as Good as Everyone Says—And It’s 15% Off for Giving Tuesday</p>
                <strike>900₹</strike><p>price:700₹</p>
                <p><button className="btn btn-success m-3 ">buy</button>
                <button  className="btn btn-primary m-3 ">Add cart</button></p>
            </div>
            </div>
    </div>
    </div>

    </div>
  )
}

export default UserHome
