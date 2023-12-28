import axios from "axios";
import { useNavigate, Link } from "react-router-dom";
import React, { useState, useEffect } from "react";

const Header = () => {
  const navigate = useNavigate();
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [username, setUsername] = useState("");

  const handleLogout = async () => {
    try {
      await axios.get("http://localhost:5000/logout");
      localStorage.removeItem("token"); // Remove token from local storage
      navigate("/login"); // Redirect to login page
    } catch (error) {
      console.error("Logout failed:", error);
    }
  };

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      axios
        .get("http://localhost:5000/bot", {
          headers: {
            Authorization: token,
          },
        })
        .then((res) => {
          console.log(res);
          setIsLoggedIn(true);
          setUsername(res.data.user.username); // Assuming the response contains the username
          console.log(res.data.user.username);
          // console.log(res.data.user.id)style={{ width: '150px', height: '70px' }
        })
        .catch((err) => {
          setIsLoggedIn(false);
          navigate("/login");
        });
    } else {
      setIsLoggedIn(false);
    }
  }, []);

  return (
    <header className="header-section">
      <div class="header-top">
        <div class="container">
          <div class="header-top-area">
            <ul class="left">
              <li>
                <i class="icofont-ui-call"></i> <span>+880 1795-256087</span>
              </li>
              <li>
                <i class="icofont-location-pin"></i> Narayanganj, Dhaka,
                Bangladesh
              </li>
            </ul>
            <ul class="social-icons d-flex align-items-center">
              <li>
                <p>Find us on :</p>
              </li>
              <li>
                <a href="#" class="fb">
                  <i class="icofont-facebook-messenger"></i>
                </a>
              </li>
              <li>
                <a href="#" class="twitter">
                  <i class="icofont-twitter"></i>
                </a>
              </li>
              <li>
                <a href="#" class="skype">
                  <i class="icofont-skype"></i>
                </a>
              </li>
              <li>
                <a href="#" class="rss">
                  <i class="icofont-rss-feed"></i>
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
              <a href="/">
                <img src="assets/images/logo/logo.png" alt="logo" />
              </a>
            </div>
            <div className="menu-area">
              {isLoggedIn ? (
                <div>
                  <ul className="menu">
                    {/* <li>
                        <a href="/">Home</a>
                      </li> */}
                    <li>
                      <a href="#0">Dashboard</a>
                      <ul className="submenu">
                        <li>
                          <a href="/about-me">Profile</a>
                        </li>
                        <li>
                          <a href="profile.html">Events</a>
                        </li>
                        <li>
                          {/* <a href="/login" className="active"> className="signup"*/}
                          <a href="/" onClick={handleLogout} className="">
                            Logout
                          </a>
                        </li>
                        {/* <li>
                            <a href="/signup">Sign Up</a>
                            </li> */}
                        <li>
                          <a href="pricing-plan.html">Reviews</a>
                        </li>
                        <li>
                          <a href="404.html">404 Page</a>
                        </li>
                      </ul>
                    </li>
                    <li>
                      <a href="/package">Packages</a>
                    </li>
                    <li>
                      <a href="#file:///C:/Users/Administrator/Downloads/payment/payment.html">Payment</a>
                      <ul className="submenu">
                        <li>
                          <a href="blog.html">Payment Methods</a>
                        </li>
                        <li>
                          <a href="blog-single.html">Payment Status</a>
                        </li>
                      </ul>
                    </li>

                    <span style={{ color: "pink" }}>Hello, {username}</span>
                  </ul>

                  {/* <a href="#" onClick={handleLogout} className="signup">
                    <i className="icofont-users" /> <span>Logout</span>
                    <span>Hello, {username}</span>
                  </a> */}
                </div>
              ) : (
                <div>
                  <a href="/login" className="login">
                    <i className="icofont-user" /> <span>LOG IN</span>{" "}
                  </a>
                  <a href="/signup" className="signup">
                    <i className="icofont-users" /> <span>SIGN UP</span>{" "}
                  </a>
                </div>
              )}
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
  );
};

export default Header;
