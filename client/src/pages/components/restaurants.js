
import React from "react";

const Restaurants= ()=>{
  
    
        return(
          <>
          {/* ================ Top Member Section start Here =============== */}
          <section className="member-section padding-tb">
  <div className="container">
    <div className="section-header">
      <h4 className="theme-color">Experience some of our beautiful events!</h4>
      <h2>Right here</h2>
    </div>
    <div className="section-wrapper">
      <div className="row justify-content-center g-3 g-md-4">
        <div className="col-xl-2 col-lg-3 col-md-4 col-6">
          <div className="lab-item member-item style-1">
            <div className="lab-inner">
              <div className="lab-thumb">
                <img src="assets/images/member/e5.jpeg" alt="member-img" />
              </div>
              <div className="lab-content">
                <h6>
                  <a href="profile.html">Cuisine Date</a>{" "}
                </h6>
                <p>A Plate of pasta with Love</p>
              </div>
            </div>
          </div>
        </div>
        <div className="col-xl-2 col-lg-3 col-md-4 col-6">
          <div className="lab-item member-item style-1">
            <div className="lab-inner">
              <div className="lab-thumb">
                <img src="assets/images/member/e1.jpg" alt="member-img" />
              </div>
              <div className="lab-content">
                <h6>
                  <a href="profile.html">Candle Light Date</a>
                </h6>
                <p>Special event</p>
              </div>
            </div>
          </div>
        </div>
        <div className="col-xl-2 col-lg-3 col-md-4 col-6">
          <div className="lab-item member-item style-1">
            <div className="lab-inner">
              <div className="lab-thumb">
                <img src="assets/images/member/e2.jpg" alt="member-img" />
              </div>
              <div className="lab-content">
                <h6>
                  <a href="profile.html">Roaming Date</a>
                </h6>
                <p>For thosen cheerfull souls</p>
              </div>
            </div>
          </div>
        </div>
        <div className="col-xl-2 col-lg-3 col-md-4 col-6">
          <div className="lab-item member-item style-1">
            <div className="lab-inner">
              <div className="lab-thumb">
                <img src="assets/images/member/e3.jpg" alt="member-img" />
              </div>
              <div className="lab-content">
                <h6>
                  <a href="profile.html">Destination Date</a>
                </h6>
                <p>A day with him & her</p>
              </div>
            </div>
          </div>
        </div>
        <div className="col-xl-2 col-lg-3 col-md-4 col-6">
          <div className="lab-item member-item style-1">
            <div className="lab-inner">
              <div className="lab-thumb">
                <img src="assets/images/member/e4.jpeg" alt="member-img" />
              </div>
              <div className="lab-content">
                <h6>
                  <a href="profile.html">A picnic Date</a>
                </h6>
                <p>Peace and plessure</p>
              </div>
            </div>
          </div>
        </div>
        {/* <div className="col-xl-2 col-lg-3 col-md-4 col-6">
          <div className="lab-item member-item style-1">
            <div className="lab-inner">
              <div className="lab-thumb">
                <img src="assets/images/member/06.jpg" alt="member-img" />
              </div>
              <div className="lab-content">
                <h6>
                  <a href="profile.html">Zeahra Guido</a>
                </h6>
                <p>Active 1 Day</p>
              </div>
            </div>
          </div>
        </div> */}
      </div>
      <div className="member-button-group d-flex flex-wrap justify-content-center">
        <a href="signup.html" className="lab-btn">
          <i className="icofont-users" /> <span>Book Your Package now</span>
        </a>
        <a href="login.html" className="lab-btn">
          <i className="icofont-play-alt-1" /> <span>Our Sponsored Events</span>
        </a>
      </div>
    </div>
  </div>
</section>

        </>
            


        );
    }

export default Restaurants;