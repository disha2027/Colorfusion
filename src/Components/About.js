import React from 'react'
import bg1 from "../Assets/bg1.jpg"
const About = () => {
  return (
    <div>
      <div className="container-fluid">
        <div className='row'> 
            <div className="col-lg-12">
            </div>
        </div>
    </div>

    <div className='container-fluid'>
        <div className="row">
              <div className="col-lg-8">
                <img src={bg1} alt='about' width={700} height={600}></img>
              </div>

              <div className="col-lg-4">
                <h3 className=' mt-5 text-center text-decoration-underline'> About Cosmetics</h3>
                <p>Cosmetics are composed of mixtures of chemical compounds derived from either natural sources or synthetically created ones. Cosmetics have various purposes, including personal and skin care. They can also be used to conceal blemishes and enhance natural features.When it comes to skincare, choosing from a plethora of products can feel downright. toners, scrubs, moisturizers, and serums can appear a daunting task. Get App. Follow Us On Social Media. Subscribe. Types: Politics, World News, Business.Cosmetics designed for skin care may be used to cleanse, exfoliate and protect the skin, as well as replenish it, through the use of body lotions, cleansers, toners, serums, moisturizers, eye creams, retinol, and balms. Cosmetics designed for more general personal care, such as shampoo, soap, and body wash, can be used to clean the body.</p>
             </div>

              </div>
            </div>
    </div>
  )
}

export default About
