import React, { useState, useEffect } from "react";
import axios from "axios";
import jwt_decode from "jwt-decode";
import Footer from "./footer";
import Header from "./header";

const AboutMe = () => {
  const [userData, setUserData] = useState(null);

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      const decoded = jwt_decode(token);
      const userId = decoded.id;

      axios
        .get(`http://localhost:5000/user/${userId}`)
        .then((response) => {
          setUserData(response.data);
        })
        .catch((error) => {
          console.error("Error fetching user data:", error);
        });
    }
  }, []);

  return (
    <>
      <Header />
      <div className="preloader">{/* Preloader content */}</div>
      <section className="page-header-section style-1">
        {/* Page header content */}
      </section>
      <section style={{ backgroundColor: "#3d0956" }}>
        <div className="container py-5">
          {/* Breadcrumb navigation */}
          <div className="row">
            <div className="col-lg-4">
              <div className="card mb-4">
                <div className="card-body text-center">
                  <img
                    src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-chat/ava3.webp"
                    alt="avatar"
                    className="rounded-circle img-fluid"
                    style={{ width: 150 }}
                  />
                  <h5 className="my-3">John Smith</h5>
                  {/* <p className="text-muted mb-1">Full Stack Developer</p> */}
                  <p className="text-muted mb-4">=========</p>
                  <div className="d-flex justify-content-center mb-2">
                    <button type="button" className="btn btn-primary">
                      Edit Profile
                    </button>
                    <button
                      type="button"
                      className="btn btn-outline-primary ms-1"
                    >
                      Report
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-8">
              <div className="card mb-4">
                <div className="card-body">
                  <div className="row">
                    <div className="col-sm-3">
                      <p className="text-muted mb-0">Full Name</p>
                    </div>
                    {/* </br> */}
                    <div className="col-sm-9">
                      <p className="text-muted mb-0">
                        {userData ? userData.name : "Loading..."}
                      </p>
                    </div>
                    /n
                  </div>
                  <div className="row">
                    <div className="col-sm-3">
                      <p className="text-muted mb-0">Email</p>
                    </div>
                    <div className="col-sm-9">
                      <p className="text-muted mb-0">
                        {userData ? userData.email : "Loading..."}
                      </p>
                    </div>
                    /n
                  </div>
                  <div className="row">
                    <div className="col-sm-3">
                      <p className="text-muted mb-0">Phone</p>
                    </div>
                    <div className="col-sm-9">
                      <p className="text-muted mb-0">
                        {userData ? userData.phone : "Loading..."}
                      </p>
                    </div>
                  </div>
                  /n
                  <div className="row">
                    <div className="col-sm-3">
                      <p className="text-muted mb-0">Occupation</p>
                    </div>
                    <div className="col-sm-9">
                      <p className="text-muted mb-0">
                        {userData ? userData.occupation : "Loading..."}
                      </p>
                    </div>
                  </div>
                  {/* More user information */}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <a href="#" className="scrollToTop">
        <i className="icofont-rounded-up" />
      </a>
      <Footer />
    </>
  );
};

export default AboutMe;
