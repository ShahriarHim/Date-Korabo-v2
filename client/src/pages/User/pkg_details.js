import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";

import Header from "../components/header";
import Footer from "../components/footer";
import Bot from "../Additional/bot";

const PkgDetails = () => {
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const type = queryParams.get("type");
  const [restaurantData, setRestaurantData] = useState([]);
  const [selectedRestaurants, setSelectedRestaurants] = useState([]);
  const [selectedRestaurant, setSelectedRestaurant] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("/restaurant/alltypes");
        const data = await response.json();
        setRestaurantData(data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, []);

  const getPackageName = (type) => {
    if (type === "finedine") {
      return "Fine Dining Package";
    } else if (type === "cafe") {
      return "Cafe Package";
    } else if (type === "rooftop") {
      return "Rooftop Package";
    }
    // Add more conditions if needed
    return "Package"; // Default package name
  };

  useEffect(() => {
    if (type && restaurantData.length > 0) {
      const selectedType = restaurantData.find(item => item._id === type);
      if (selectedType) {
        setSelectedRestaurants(selectedType.details);
        setSelectedRestaurant(selectedType.details[0]?.rest_name || "");
      }
    }
  }, [type, restaurantData]);

  const handleRestaurantChange = event => {
    setSelectedRestaurant(event.target.value);
  };

  const selectedRestaurantDetails = selectedRestaurants.find(
    restaurant => restaurant.rest_name === selectedRestaurant
  );

  return (
    <div>
      <>
       
        <div>
          <meta charSet="UTF-8" />
          <meta
            name="viewport"
            content="width=device-width, initial-scale=1.0"
          />
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
          <link rel="stylesheet" href="assets/css/swiper.min.css" />
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
          <Header />

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
                    <h2>Package Details</h2>
                  </div>
                  <ol className="breadcrumb">
                    <li>
                      <a href="/package">Packages</a>
                    </li>
                    <li className="active">Date Korabo!</li>
                  </ol>
                </div>
              </div>
            </div>
          </section>
          {/* ==========Page Header Section Ends Here========== */}
          {/* Contact Us Section Start Here */}
          <div className="contact-section">
            <div className="contact-top padding-tb aside-bg padding-b">
              <div className="container">
                <div className="row">
                  <div className="col-lg-8">
                    <article className="contact-form-wrapper">
                      <div className="contact-form">
                        <div className="post-thumb">
                          <a href="blog-single.html">
                            <img src="assets/images/blog/01.jpg" alt="blog" />
                          </a>
                        </div>
                        <h4>{getPackageName(type)}</h4>
                        <p className="mb-5">
                          Check out the beautiful restaurants under this
                          package!!. Functionality and options may differ so
                          choose your desired one!
                        </p>




                        <form action="/" className="banner-form">
        <div className="gender">
          <div className="custom-select right w-100">
            <select
              name="rest_name"
              id="rest_name"
              className="custom-select right w-100"
              value={selectedRestaurant}
              onChange={handleRestaurantChange}
            >
              {selectedRestaurants.map((restaurant, index) => (
                <option key={index} value={restaurant.rest_name}>
                  {restaurant.rest_name}
                </option>
              ))}
            </select>
          </div>
        </div>
        <div className="menu-section">
        <h4>Menu:</h4>
        {selectedRestaurantDetails && (
          <div>
            {selectedRestaurantDetails.menuItems.map((menuItem, index) => (
              <div key={index}>
                <p>
                  {menuItem.food_type.charAt(0).toUpperCase()+ menuItem.food_type.slice(1)} :
                
                  {menuItem.item_name}, Cost: ${menuItem.cost}
                </p>
              </div>
            ))}
          </div>
        )}
      </div>
      
      </form>

                        <button type="submit" class="lab-btn">
                          <span>Confirm Booking</span>
                        </button>
                       <Bot/>
                      </div>
                    </article>
                  </div>
                  <div className="col-lg-4">

                  <div className="contact-info-wrapper">
  <div className="contact-info-title">
    <h5>Get Information</h5>
    <p>
      Our Contact information Details and Follow us on
      social media
    </p>
  </div>

  
  {selectedRestaurantDetails && (
  <div className="contact-info-content">
    <div className="contact-info-item">
      <div className="contact-info-inner">
        <div className="contact-info-thumb">
        <img
                src={`assets/images/restaurants/${selectedRestaurantDetails.image}`}
                alt={selectedRestaurantDetails.rest_name}
              />
        </div>
        <div className="contact-info-details">
          <span className="fw-bold">Location</span>
          <p>{selectedRestaurantDetails.location}</p>
        </div>
      </div>
    </div>
    <div className="contact-info-item">
      <div className="contact-info-inner">
        <div className="contact-info-thumb">
          <img
            src="assets/images/contact/02.png"
            alt="address"
          />
        </div>
        <div className="contact-info-details">
          <span className="fw-bold">Contact</span>
          <p>{selectedRestaurantDetails.contact}</p>
        </div>
      </div>
    </div>
    {/* Similar sections for Send Mail and Our Website */}
    <div className="contact-info-item">
      <div className="contact-info-inner">
        <div className="contact-info-thumb">
          <img
            src="assets/images/contact/03.png"
            alt="address"
          />
        </div>
        <div className="contact-info-details">
          <span className="fw-bold">Send Mail</span>
          <p>{selectedRestaurantDetails.email}</p> {/* Replace with the actual email */}
        </div>
      </div>
    </div>
    <div className="contact-info-item">
      <div className="contact-info-inner">
        <div className="contact-info-thumb">
          <img
            src="assets/images/contact/04.png"
            alt="address"
          />
        </div>
        <div className="contact-info-details">
          <span className="fw-bold">Our Website</span>
          <p>{selectedRestaurantDetails.website}</p> {/* Replace with the actual website */}
        </div>
      </div>
    </div>
  </div>
)}









</div>

                

                    
                  </div>
                </div>
              </div>
            </div>
            {/* footer starts here */}
            <Footer />
            {/* ================ footer Section end Here =============== */}
            {/* scrollToTop start here */}
            <a href="#" className="scrollToTop">
              <i className="icofont-rounded-up" />
            </a>
            {/* scrollToTop ending here */}
            {/* All Scripts */}
          </div>
        </div>
      </>
    </div>
  );
};

export default PkgDetails;
