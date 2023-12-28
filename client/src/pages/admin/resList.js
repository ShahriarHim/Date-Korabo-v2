import React from 'react';
import { Link } from 'react-router-dom';
import LeftPanel from './leftPanel';
import RestaurantShow from '../Restaurant/restaurantShow'; // Import the component responsible for showing restaurant data

function ResList() {
  return (
    <div className="color">
      <LeftPanel />
      <section className="home-section">
        <nav>
          <div className="sidebar-button">
            {/* <i className="bx bx-menu sidebarBtn" /> */}
            <span className="dashboard">
              <p style={{ color: 'red', fontWeight: 'bold', fontSize: '30px' }} >Restaurant Control Panel</p>
            </span>
          </div>
        </nav>
        <div className="home-content">
          <div className="overview-boxes"></div>
          <div className="sales-boxes">
            <div className="recent-sales box">

              <div>
                <Link to="/res-create" >
                  <button  className="button button5">++ Add New Restaurant</button>
                </Link>
              </div>
              <div>
                <Link to="/menu-create" >
                  <button  className="button button5">++ Add New Restaurant's menu</button>
                </Link>
              </div>
              <RestaurantShow /> {/* Include the component responsible for showing restaurant data */}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default ResList;
