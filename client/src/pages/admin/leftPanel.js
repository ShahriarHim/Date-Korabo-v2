import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import axios from "axios";
import { useNavigate } from 'react-router-dom';

const LeftPanel = () => {
  const [activeLink, setActiveLink] = useState("dashboard");
  const navigate = useNavigate();
  const location = useLocation();

  const handleLinkClick = (link) => {
    setActiveLink(link);
  };

  const handleLogout = async () => {
    try {
      await axios.get('http://localhost:5000/logout');
      localStorage.removeItem('token'); // Remove token from local storage
      navigate('/aLogin'); // Redirect to the login page
    } catch (error) {
      console.error('Logout failed:', error);
    }
  };


  return (
    <div className="sidebar">
      <div className="logo-details headColor">
        <span className="logo_name dot">Date করাবো!</span>
      </div>
      <ul className="nav-links">
        <li>
          <Link
            to="/admin-Dashboard"
            className={location.pathname === "/admin-Dashboard" ? "active" : ""}
            onClick={() => handleLinkClick("dashboard")}
          >
            <i className="bx bx-grid-alt" /> 
            {/* <i class='fas fa-user-alt'/> */}
            <span className="links_name">Profile</span>
          </Link>
        </li>
        <li>
          <Link
            to="/user-list"
            className={location.pathname === "/user-list" ? "active" : ""}
            onClick={() => handleLinkClick("userList")}
          >
            <i className="bx bx-box" />
            <span className="links_name">User List</span>
          </Link>
        </li>
        <li>
          <Link
            to="/res-list"
            className={location.pathname === "/res-list" ? "active" : ""}
            onClick={() => {handleLinkClick("resList");}}
          >
            <i className="bx bx-list-ul" />
            <span className="links_name">Restaurants</span>
          </Link>
        </li>
        <li>
          <Link
            to="/res-create"
            className={location.pathname === "/res-create" ? "active" : ""}
            onClick={() => {handleLinkClick("resCreate");}}
          >
            <i className="bx bx-plus" />
            <span className="links_name">Add Restaurant</span>
          </Link>
        </li>
        <li>
          <Link
            to="/menu-create"
            className={location.pathname === "/menu-create" ? "active" : ""}
            onClick={() => {handleLinkClick("menuCreate");}}
          >
            <i className="bx bx-plus" />
            <span className="links_name">Add Menu</span>
          </Link>
        </li>
        <li className="log_out">
          <a href="#" onClick={handleLogout} className="signup">
            <i className="icofont-users" /> <span>Logout</span>
          </a>
        </li>
      </ul>
    </div>
  );
};

export default LeftPanel;
