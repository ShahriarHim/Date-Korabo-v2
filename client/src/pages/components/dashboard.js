
import React,{ useState,useEffect } from "react";
import Package from "../User/package";

import Header from "./header";
import Restaurants from "./restaurants";
// import Events from "./events";

const Dashboard= ()=>{ 
  

  
        return(
            <div>
<>
  {/* preloader start here */}
  <div className="preloader">
    <div className="preloader-inner">
      <div className="preloader-icon">
        <span />
        <span />
      </div>
    </div>
  </div>
   
  <>
  <Header/>
  
  </>
 
  <section
    className="page-header-section style-1"
    style={{ background: "url(assets/images/page-header.jpg)" }}
  >
    <div className="container">
      <div className="page-header-content">
        <div className="page-header-inner">
           
          <div id="top_section" class=" banner_main">
         <div class="container">
            <div class="row d_flex">
               <div class="col-md-6">
                  <div>
                    <a>
                      {/* <img src={purelogo} alt="Logo" /> className="logo"*/}
                      <img src='assets/images/logo/alogo.gif' alt="animated_logo" style={{ width: "360px", display: "block", margin: "0 auto" }} />
                    </a>
                  </div>
                  <div class="airmic">
                     <h1> Date করাবো! </h1>
                     <p>“Discover more than just a date. Uncover your Soulmate with our unique platform, where you can not only search for the perfect place but also create unforgettable memories together.”
                     </p>
                     <a class="read_more" href="Javascript:void(0)">Explore </a>
                  </div>
               </div>
               <div class="col-md-6">
                  <div class="mic_img">
                     <figure><img src="assets/images/demo.png" alt="#"/></figure>
                  </div>
               </div>
            </div>
         </div>
      </div>
         
        </div>
      </div>
    </div>
  </section>

  
 
  <>
  <Restaurants/>
  <Package/>
  {/* <Events/> */}
</>


  <> 

  </>
  {/* ================ footer Section end Here =============== */}
  {/* scrollToTop start here */}
  <a href="#" className="scrollToTop">
    <i className="icofont-rounded-up" />
  </a>
 
</>






        </div>
        );
    }

export default Dashboard;