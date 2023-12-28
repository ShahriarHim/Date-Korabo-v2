<>
  <meta charSet="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  {/* x-icon */}
  <link
    rel="shortcut icon"
    href="assets/images/x-icon.png"
    type="image/x-icon"
  />
  {/* Other css */}
  <link rel="stylesheet" href="assets/css/animate.css" />
  <link rel="stylesheet" href="assets/css/bootstrap.min.css" />
  <link rel="stylesheet" href="assets/css/icofont.min.css" />
  <link rel="stylesheet" href="assets/css/swiper.min.css" />hg
  <link rel="stylesheet" href="assets/css/style.css" />
  <title>TuruLav</title>
  {/* preloader start here */}
  <div className="preloader">
    <div className="preloader-inner">
      <div className="preloader-icon">
        <span />
        <span />
      </div>
    </div>
  </div>
  {/* preloader ending here */}
  {/* ==========Header Section Starts Here========== */}
  <header className="header-section">
    <div className="header-top">
      <div className="container">
        <div className="header-top-area">
          <ul className="left">
            <li>
              <i className="icofont-ui-call" /> <span>+800-123-4567 6587</span>
            </li>
            <li>
              <i className="icofont-location-pin" /> Beverley, New York 224 USA
            </li>
          </ul>
          <ul className="social-icons d-flex align-items-center">
            <li>
              <p>Find us on :</p>
            </li>
            <li>
              <a href="#" className="fb">
                <i className="icofont-facebook-messenger" />
              </a>
            </li>
            <li>
              <a href="#" className="twitter">
                <i className="icofont-twitter" />
              </a>
            </li>
            <li>
              <a href="#" className="vimeo">
                <i className="icofont-vimeo" />
              </a>
            </li>
            <li>
              <a href="#" className="skype">
                <i className="icofont-skype" />
              </a>
            </li>
            <li>
              <a href="#" className="rss">
                <i className="icofont-rss-feed" />
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
    <div className="header-bottom">
      <div className="container">
        <div className="header-wrapper">
          <div className="logo">
            <a href="index.html">
              <img src="assets/images/logo/logo.png" alt="logo" />
            </a>
          </div>
          <div className="menu-area">
            <ul className="menu">
              <li>
                <a href="index.html">Home</a>
              </li>
              <li>
                <a href="#0">Features</a>
                <ul className="submenu">
                  <li>
                    <a href="members.html">All Members</a>
                  </li>
                  <li>
                    <a href="profile.html">Member Profile</a>
                  </li>
                  <li>
                    <a href="login.html">Login</a>
                  </li>
                  <li>
                    <a href="signup.html">Sign Up</a>
                  </li>
                  <li>
                    <a href="pricing-plan.html" className="active">
                      Pricing Plan
                    </a>
                  </li>
                  <li>
                    <a href="404.html">404 Page</a>
                  </li>
                </ul>
              </li>
              <li>
                <a href="active-group.html">Community</a>
              </li>
              <li>
                <a href="#0">Blog</a>
                <ul className="submenu">
                  <li>
                    <a href="blog.html">Blog</a>
                  </li>
                  <li>
                    <a href="blog-single.html">Blog Single</a>
                  </li>
                </ul>
              </li>
              <li>
                <a href="contact.html">Contact</a>
              </li>
            </ul>
            <a href="login.html" className="login">
              <i className="icofont-user" /> <span>LOG IN</span>{" "}
            </a>
            <a href="signup.html" className="signup">
              <i className="icofont-users" /> <span>SIGN UP</span>{" "}
            </a>
            {/* toggle icons */}
            <div className="header-bar d-lg-none">
              <span />
              <span />
              <span />
            </div>
            <div className="ellepsis-bar d-lg-none">
              <i className="icofont-info-square" />
            </div>
          </div>
        </div>
      </div>
    </div>
  </header>
  {/* ==========Header Section Ends Here========== */}
  {/* ==========pricing plan Section Start Here========== */}
  <section className="pricing-section padding-tb">
    <div className="container">
      <div className="section-header">
        <br />
        <br />
        <h2>Card Payment</h2>
      </div>
      <center>
        <div className="price-item size">
          <div className="price-item-inner">
            {/* <div class="price-top">
                                  <h6>Gold Package</h6>
                                  <h2>$390.00</h2>
                                  <p>Pay your Bill using Rocket app</p>
                              </div> */}
            <div className="price-bottom">
              <section style={{ backgroundColor: "#f9c9aa" }}>
                <div className="container py-5">
                  <div className="row d-flex justify-content-center">
                    <div className="col-md-9 col-lg-7 col-xl-5 div_size">
                      <div className="card">
                        <img
                          src="card.png"
                          className="card-img-top"
                          alt="Black Chair"
                        />
                        <div className="card-body">
                          <div className="card-title d-flex justify-content-between mb-0">
                            <p className="text-muted mb-0">Total Bill</p>
                            <p className="mb-0">$760</p>
                          </div>
                        </div>
                        <div
                          className="rounded-bottom"
                          style={{ backgroundColor: "#eee" }}
                        >
                          <div className="card-body">
                            <p className="mb-4">Card Number</p>
                            <div className="form-outline mb-3">
                              <input
                                type="text"
                                id="formControlLgXM8"
                                className="form-control"
                                placeholder="01xxx xxx xxx"
                              />
                              <label
                                className="form-label"
                                htmlFor="formControlLgXM8"
                              >
                                Password
                              </label>
                            </div>
                            <div className="form-outline mb-3">
                              <input
                                type="password"
                                id="formControlLgXM8"
                                className="form-control"
                                placeholder="Rocket password"
                              />
                            </div>
                            <button className="btn btn-info btn-block">
                              <a href="congo.html">Confirm Payment</a>
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </section>
            </div>
          </div>
        </div>
      </center>
    </div>
  </section>
  {/* ==========pricing plan Section Ends Here========== */}
  {/* ================ footer Section start Here =============== */}
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
                  <h4>About TuruLav</h4>
                </div>
                <div className="fm-item-content">
                  <p className="mb-4">
                    Energistically coordinate highly efficient procesr
                    partnerships befor revolutionar growth strategie improvement
                    viaing awesome
                  </p>
                  <img
                    src="assets/images/footer/about.jpg"
                    alt="about-image"
                    className="footer-abt-img"
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 col-12">
            <div className="footer-middle-item-wrapper">
              <div className="footer-middle-item mb-lg-0">
                <div className="fm-item-title">
                  <h4>our Recent news</h4>
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
                  <h4>Our Newsletter Signup</h4>
                </div>
                <div className="fm-item-content">
                  <p>
                    By subscribing to our mailing list you will always be update
                    with the latest news from us.
                  </p>
                  <form>
                    <div className="form-group">
                      <input
                        type="email"
                        className="form-control"
                        placeholder="Enter email"
                      />
                    </div>
                    <button type="submit" className="lab-btn">
                      Send Massage <i className="icofont-paper-plane" />
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div className="footer-bottom">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="footer-bottom-content text-center">
              <p>
                © 2022 <a href="index.html">TuruLav</a> -Best For Dating HTML
                Template.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </footer>
  {/* ================ footer Section end Here =============== */}
  {/* scrollToTop start here */}
  <a href="#" className="scrollToTop">
    <i className="icofont-rounded-up" />
  </a>
  {/* scrollToTop ending here */}
  {/* All Scripts */}
</>
