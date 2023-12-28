import React, { useState } from "react";
import Footer from "../components/footer";
import Header from "../components/header";
import { useNavigate } from "react-router-dom";

const Signup = () => {
  const navigate = useNavigate();
  const [user, setUser] = useState({
    name: "",
    email: "",
    phone: "",
    occupation: "",
    password: "",
    cPassword: "",
  });
  let name, value;
  const handleInputs = (e) => {
    name = e.target.name;
    value = e.target.value;

    setUser({ ...user, [name]: value });
  };

  const PostData = async (e) => {
    e.preventDefault();
    const { name, email, phone, occupation, password, cPassword } = user;

    const res = await fetch("/sign-up", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name,
        email,
        phone,
        occupation,
        password,
        cPassword,
      }),
    });

    const data = await res.json();
    if (data.status === 200 || data) {
      window.alert("Registered Successfully!");
      console.log("josss mama");
      navigate("/login");
    } else {
      window.alert("Registration Unsuccessfull!");
      console.log("mara khau");
    }
  };
  return (
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
        {/* preloader ending here */}
        {/* ==========Header Section Starts Here========== */}
        <>
          <Header />
        </>
        {/* ==========Header Section Ends Here========== */}
        {/* ==========Page Header Section Start Here========== */}
        <section
          className="page-header-section style-1"
          style={{ background: "url(assets/images/page-header.jpg)" }}
        >
          <div className="container">
            <div className="page-header-content">
              <div className="page-header-inner">
                <div className="page-title">
                  <h2>Date করাবো! - User Registration</h2>
                </div>
                <ol className="breadcrumb">
                  <li>
                    <a href="/">Home</a>
                  </li>
                  <li className="/signup">Sign up</li>
                </ol>
              </div>
            </div>
          </div>
        </section>
        {/* ==========Page Header Section Ends Here========== */}
        {/* ==========Sign up Section start Here========== */}
        <div className="login-section padding-tb">
          <div className="container">
            <div className="account-wrapper">
              <h3 className="title">Register Now</h3>
              <form method="POST" className="account-form">
                <div className="form-group">
                  <input
                    type="text"
                    placeholder="User name"
                    name="name"
                    value={user.name}
                    onChange={handleInputs}
                  />
                </div>
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
                    type="text"
                    placeholder="Phone"
                    name="phone"
                    value={user.phone}
                    onChange={handleInputs}
                  />
                </div>
                <div className="form-group">
                  <input
                    type="text"
                    placeholder="Occupation"
                    name="occupation"
                    value={user.occupation}
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
                <div className="form-group">
                  <input
                    type="password"
                    placeholder="Confirm Password"
                    name="cPassword"
                    value={user.cPassword}
                    onChange={handleInputs}
                  />
                </div>
                {/* <div className="form-group form-button">
            
          </div> */}
                {/* <div className="form-group d-block lab-btn">
            <button className="" value="" >
              <span>Get Started Now</span> 

              <input type="submit" name="signup" id="signup" className="form-submit"
              value='register' onClick={PostData}

            />

            </button>
          </div> */}
                <div class="form-group">
                  <div class="d-flex justify-content-between flex-wrap pt-sm-2">
                    <div class="checkgroup">
                      <input type="checkbox" name="remember" id="remember" />
                      <label for="remember">Remember Me</label>
                    </div>
                    <a href="#">Forget Password?</a>
                  </div>
                </div>
                <div class="form-group">
                  <button class="d-block lab-btn" onClick={PostData}>
                    <span>Get Started Now!</span>
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
        {/* ==========Sign up Section ends Here========== */}
        {/* ================ footer Section start Here =============== */}
        <>
          <Footer />
        </>
        {/* ================ footer Section end Here =============== */}
        {/* scrollToTop start here */}
        <a href="" className="scrollToTop">
          <i className="icofont-rounded-up" />
        </a>
        {/* scrollToTop ending here */}
        {/* All Scripts */}
      </>
    </div>
  );
};

export default Signup;
