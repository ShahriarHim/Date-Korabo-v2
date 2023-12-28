import React from 'react';
import { Link } from 'react-router-dom';
import LeftPanel from './leftPanel';
import RestaurantReg from '../Restaurant/restaurantReg';


function ResCreate() {
  return (
    <div className="color">
      <LeftPanel />
      <section className="home-section">
        <nav>
          <div className="sidebar-button">
            {/* <i className="bx bx-menu sidebarBtn" /> */}
            <span className="dashboard">
              <p style={{ color: 'red', fontWeight: 'bold', fontSize: '30px' }} >Restaurant Registration Panel</p>
            </span>
          </div>
        </nav>
        <div className="home-content">
          <div className="overview-boxes"></div>
          <div className="sales-boxes">
            <div className="recent-sales box">
              <div>
                <Link to="/menu-create" >
                  <button className="button button5">++ Add New Menu</button>
                </Link>
              </div>
              <RestaurantReg />


            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default ResCreate;
