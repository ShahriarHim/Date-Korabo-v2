import React, { useState } from "react";

const Footer = () => {
  return (
    <footer className="footer-section">
      <div className="footer-top">
        <div className="container">
          <div className="row g-3 justify-content-center g-lg-0">
            <div className="col-lg-4 col-sm-6 col-12">
              <div className="footer-top-item lab-item">
                <div className="lab-inner">
                  <div className="lab-thumb">
                    <img
                      src="assets/images/footer/icons/01.png"
                      alt="Phone-icon"
                    />
                  </div>
                  <div className="lab-content">
                    <span>Phone Number : +88019 339 702 520</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-sm-6 col-12">
              <div className="footer-top-item lab-item">
                <div className="lab-inner">
                  <div className="lab-thumb">
                    <img
                      src="assets/images/footer/icons/02.png"
                      alt="email-icon"
                    />
                  </div>
                  <div className="lab-content">
                    <span>Email : admin@turulav.com</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-sm-6 col-12">
              <div className="footer-top-item lab-item">
                <div className="lab-inner">
                  <div className="lab-thumb">
                    <img
                      src="assets/images/footer/icons/03.png"
                      alt="location-icon"
                    />
                  </div>
                  <div className="lab-content">
                    <span>Address : 30 North West New York 240</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div
        className="footer-middle padding-tb"
        style={{ backgroundImage: "url(assets/images/footer/bg.png)" }}
      >
        <div className="container">
          <div className="row">
          <div className="col-lg-4 col-md-6 col-12">
              <div className="footer-middle-item-wrapper">
                <div className="footer-middle-item mb-lg-0">
                  <div className="fm-item-title">
                    <h4>Our Recent Reviews</h4>
                  </div>
                  <div className="fm-item-content">
                    <div className="fm-item-widget lab-item">
                      <div className="lab-inner">
                        <div className="lab-thumb">
                          <a href="#">
                            {" "}
                            <img
                              src="assets/images/footer/01.jpg"
                              alt="footer-widget-img"
                            />
                          </a>
                        </div>
                        <div className="lab-content">
                          <h6>
                            <a href="blog-single.html">
                              Enable Seamin Matera Forin And Our Orthonal Create
                              Vortals.
                            </a>
                          </h6>
                          <p>July 23, 2021</p>
                        </div>
                      </div>
                    </div>
                    <div className="fm-item-widget lab-item">
                      <div className="lab-inner">
                        <div className="lab-thumb">
                          <a href="#">
                            <img
                              src="assets/images/footer/02.jpg"
                              alt="footer-widget-img"
                            />
                          </a>
                        </div>
                        <div className="lab-content">
                          <h6>
                            <a href="blog-single.html">
                              Dynamca Network Otuitive Catays For Plagiarize
                              Mindshare After
                            </a>
                          </h6>
                          <p>July 23, 2021</p>
                        </div>
                      </div>
                    </div>
                    <div className="fm-item-widget lab-item">
                      <div className="lab-inner">
                        <div className="lab-thumb">
                          <a href="#">
                            <img
                              src="assets/images/footer/03.jpg"
                              alt="footer-widget-img"
                            />
                          </a>
                        </div>
                        <div className="lab-content">
                          <h6>
                            <a href="blog-single.html">
                              Dynamca Network Otuitive Catays For Plagiarize
                              Mindshare After
                            </a>
                          </h6>
                          <p>July 23, 2021</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            

            <div className="col-lg-4 col-md-6 col-12">
              <div className="footer-middle-item-wrapper">
                <div className="footer-middle-item mb-lg-0">
                  <div className="fm-item-title">
                    <h4></h4>
                    <br/>
                  </div>
                  <div className="fm-item-content">
                    <div className="fm-item-widget lab-item">
                      <div className="lab-inner">
                        <div className="lab-thumb">
                          <a href="#">
                            {" "}
                            <img
                              src="assets/images/footer/01.jpg"
                              alt="footer-widget-img"
                            />
                          </a>
                        </div>
                        <div className="lab-content">
                          <h6>
                            <a href="blog-single.html">
                              Enable Seamin Matera Forin And Our Orthonal Create
                              Vortals.
                            </a>
                          </h6>
                          <p>July 23, 2021</p>
                        </div>
                      </div>
                    </div>
                    <div className="fm-item-widget lab-item">
                      <div className="lab-inner">
                        <div className="lab-thumb">
                          <a href="#">
                            <img
                              src="assets/images/footer/02.jpg"
                              alt="footer-widget-img"
                            />
                          </a>
                        </div>
                        <div className="lab-content">
                          <h6>
                            <a href="blog-single.html">
                              Dynamca Network Otuitive Catays For Plagiarize
                              Mindshare After
                            </a>
                          </h6>
                          <p>July 23, 2021</p>
                        </div>
                      </div>
                    </div>
                    <div className="fm-item-widget lab-item">
                      <div className="lab-inner">
                        <div className="lab-thumb">
                          <a href="#">
                            <img
                              src="assets/images/footer/03.jpg"
                              alt="footer-widget-img"
                            />
                          </a>
                        </div>
                        <div className="lab-content">
                          <h6>
                            <a href="blog-single.html">
                              Dynamca Network Otuitive Catays For Plagiarize
                              Mindshare After
                            </a>
                          </h6>
                          <p>July 23, 2021</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="col-lg-4 col-md-6 col-12">
              <div className="footer-middle-item-wrapper">
                <div className="footer-middle-item-3 mb-lg-0">
                  <div className="fm-item-title">
                    <h4>Reviews section</h4>
                  </div>
                  <div className="fm-item-content">
                    <p>
                    Send SMS Review Requests And Collect Feedback Via Text Message.
                    Learn how to set up a SMS text message that you can send to your customers and ask them to leave you a review.
                    </p>
                    <form>
                      <div className="form-group">
                        <input
                          type="email"
                          className="form-control"
                          placeholder="Write Down your Reviews"
                        />
                      </div>
                      <button type="submit" className="lab-btn">
                        Send Review <i className="icofont-paper-plane" />
                      </button>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;