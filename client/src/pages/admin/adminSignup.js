import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Footer from "../components/footer";
import Header from "../components/header";

const AdminSignup = () => {
  const navigate = useNavigate();
  const [admin, setAdmin] = useState({
    name: "",
    email: "",
    phone: "",
    password: "",
    cPassword: "",
    keyword: "",
  });

  const handleInputs = (e) => {
    const { name, value } = e.target;
    setAdmin({ ...admin, [name]: value });
  };

  const PostData = async (e) => {
    console.log(admin); 
    e.preventDefault();
    const { name, email, phone,  password, cPassword, keyword } = admin;
  
    if (keyword !== "xAdminx") {
      window.alert("Invalid keyword!");
      return;
    }
  
    const res = await fetch("http://localhost:5000/aSign-up", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name,
        email,
        phone,
        password,
        cPassword,
        keyword,
      }),
    });
  
    const data = await res.json();
    if (data.success) {
      window.alert("Admin Registered Successfully!");
      navigate("/aLogin"); // Redirect to login page
    } else {
      window.alert("Admin Registration Unsuccessful!");
    }
  };
  

  return (
    <div>
      <div className="preloader">
        {/* Preloader content */}
      </div>
      {/* <Header /> */}
      <Header />

      <section className="page-header-section style-1">
        {/* Page header content */}
      </section>
      <div className="login-section padding-tb">
        <div className="container">
          <div className="account-wrapper">
            <h3 className="title">Register Now</h3>
            <form method="POST" className="account-form">
              {/* Admin signup form */}
              <div className="form-group">
                <input
                  type="text"
                  placeholder="User name"
                  name="name"
                  value={admin.name}
                  onChange={handleInputs}
                />
              </div>
              <div className="form-group">
                <input
                  type="text"
                  placeholder="Email"
                  name="email"
                  value={admin.email}
                  onChange={handleInputs}
                />
              </div>
              <div className="form-group">
                <input
                  type="text"
                  placeholder="Phone"
                  name="phone"
                  value={admin.phone}
                  onChange={handleInputs}
                />
              </div>

              <div className="form-group">
                <input
                  type="password"
                  placeholder="Password"
                  name="password"
                  value={admin.password}
                  onChange={handleInputs}
                />
              </div>
              <div className="form-group">
                <input
                  type="password"
                  placeholder="Confirm Password"
                  name="cPassword"
                  value={admin.cPassword}
                  onChange={handleInputs}
                />
              </div>
              <div className="form-group">
                <input
                  type="password"
                  placeholder="Keyword"
                  name="keyword"
                  value={admin.keyword}
                  onChange={handleInputs}
                />
              </div>
              <div className="form-group">
                <button className="d-block lab-btn" onClick={PostData}>
                  <span>Get Started Now!</span>
                </button>
              </div>
            </form>

          </div>
        </div>
      </div>
      {/* <Footer /> */}
      <Footer />
      <a href="" className="scrollToTop">
        {/* Scroll to top */}
      </a>
    </div>
  );
};

export default AdminSignup;
