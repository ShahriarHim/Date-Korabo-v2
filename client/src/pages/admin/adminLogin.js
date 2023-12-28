// import axios from "axios";
import React, { useState } from "react";

import { useNavigate } from "react-router-dom";
const ALogin = () => {
  const navigate = useNavigate();
  const [user, setUser] = useState({
    email: "",
    password: "",
  });
  let name, value;
  const handleInputs = (e) => {
    name = e.target.name;
    value = e.target.value;
    setUser({ ...user, [name]: value });
  };

  const PostData = async (e) => {
    e.preventDefault();
    const { email, password } = user;

    const res = await fetch("/aSign-in", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email,
        password,
      }),
    });

    const data = await res.json();
    if (res.ok) {
      localStorage.setItem("token", data.token);
      window.alert("Logged In As an Admin");
      console.log("login Successful");
      navigate("/admin-Dashboard");
    } else {
      window.alert("Invalid Credentials");
      console.log("login Unsuccessful");
      navigate("/aLogin");
    }
  };
  return (
    <div>
      <>
        {/* preloader start here */}

        {/* preloader ending here */}
        {/* ==========Header Section Starts Here========== */}
        <>{/* <Header/> */}</>

        <section
          className="page-header-section style-1"
          style={{ background: "url(assets/images/page-header.jpg)" }}
        >
          <div className="container">
            <div className="page-header-content">
              <div className="page-header-inner">
                <div className="page-title">
                  <h2>Date করাবো! - Admin Section</h2>
                </div>
                <ol className="breadcrumb">
                  <li>
                    <a href="/">Home</a>
                  </li>
                  <li className="active">Login</li>
                </ol>
                <ol className="breadcrumb">
                  <li>
                    <a href="/login">Login</a>
                  </li>
                  <li className="active">Login as User</li>
                </ol>
              </div>
            </div>
          </div>
        </section>
        {/* ==========Page Header Section Ends Here========== */}
        {/* ==========login Section start Here========== */}
        <div className="login-section padding-tb">
          <div className=" container">
            <div className="account-wrapper">
              <h3 className="title">Login</h3>

              <form method="POST" className="account-form">
                <div className="form-group">
                  <input
                    type="text"
                    placeholder="Email"
                    name="email"
                    value={user.email}
                    onChange={handleInputs}
                  />
                </div>

                <div className="form-group">
                  <input
                    type="password"
                    placeholder="Password"
                    name="password"
                    value={user.password}
                    onChange={handleInputs}
                  />
                </div>

                {/* <div className="form-group form-button">
            
          </div> */}
                {/* <div className="form-group d-block lab-btn">
            <button type='submit' name = 'signup' id='login' className="form-submit" value="register" >
              <span>Get Started Now</span> 

              {/* <input type="submit" name="signup" id="login" className="form-submit"
              value='register' 

            /> 

            </button>
          </div> */}
                <div class="form-group">
                  <button class="d-block lab-btn" onClick={PostData}>
                    <span>Login</span>
                  </button>
                </div>

              </form>
              <div className="account-bottom">
                <span className="d-block cate pt-10">
                  Don’t Have any Account?
                  <a href="/aSignup"> Sign Up</a>
                </span>
                <span className="or">
                  <span>or</span>
                </span>
                <h5 className="subtitle">Login With Social Media</h5>
                <ul className="social-media social-color lab-ul d-flex justify-content-center">
                  <li>
                    <a href="#" className="facebook">
                      <i className="icofont-facebook" />
                    </a>
                  </li>
                  <li>
                    <a href="#" className="twitter">
                      <i className="icofont-twitter" />
                    </a>
                  </li>
                  <li>
                    <a href="#" className="linkedin">
                      <i className="icofont-linkedin" />
                    </a>
                  </li>
                  <li>
                    <a href="#" className="instagram">
                      <i className="icofont-instagram" />
                    </a>
                  </li>
                  <li>
                    <a href="#" className="pinterest">
                      <i className="icofont-pinterest" />
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        <>{/* <Footer/> */}</>

        <a href="#" className="scrollToTop">
          <i className="icofont-rounded-up" />
        </a>
      </>
    </div>
  );
};

export default ALogin;
