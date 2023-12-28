import React, { useEffect, useState } from 'react';
import jwtDecode from 'jwt-decode';
import LeftPanel from './leftPanel';

function AdminProfile() {
  const [adminDetails, setAdminDetails] = useState(null);

  useEffect(() => {
    // Fetch the JWT token from wherever it is stored (e.g., localStorage)
    const token = localStorage.getItem('token'); // Replace with your actual token key

    if (token) {
      try {
        const decodedToken = jwtDecode(token);
        const userId = decodedToken.id; // Assuming 'sub' is the key for user ID
        console.log('userId', userId)
        if (userId) {
          // Fetch admin details using the userId
          fetchAdminDetails(userId);
        } else {
          console.error('User ID not found in the decoded token');
        }
      } catch (error) {
        console.error('Error decoding the token:', error);
        // Handle error, e.g., show an error message to the user
      }
    } else {
      console.error('JWT token not found');
    }
  }, []);

  const fetchAdminDetails = async (userId) => {
    try {
      // Replace '/admins/:id' with your actual API endpoint
      const response = await fetch(`http://localhost:5000/admin/${userId}`);
      if (!response.ok) {
        throw new Error('Failed to fetch admin details');
      }

      const adminData = await response.json();
      setAdminDetails(adminData);
    } catch (error) {
      console.error('Error fetching admin details:', error);
      // Handle error, e.g., show an error message to the user
    }
  };

  return (
    <>
      <div className="color">
        <LeftPanel />
      </div>
      <section className="home-section">
        <nav>
          <div className="sidebar-button">
            {/* <i className="bx bx-menu sidebarBtn" /> */}
            <h1>
            <p style={{ color: 'red', fontWeight: 'bold' ,fontSize: '30px'}}>Admin Profile Panel</p>
            </h1>
          </div>
        </nav>
        <div className="home-content">
          <div className="overview-boxes"></div>
          <div className="sales-boxes">
            <div className="recent-sales box">
            <h3  className="text-muted mb-0" >Admin Profile</h3>

              <br></br>
              {adminDetails ? (
                <div>
                  <p className="text-muted mb-0">Name: {adminDetails.name}</p>
                  <br/>
                  <p className="text-muted mb-0">Email: {adminDetails.email}</p>
                  <br/>
                  <p className="text-muted mb-0">Phone: {adminDetails.phone}</p>
                  {/* Add other details you want to display */}
                </div>
              ) : (
                <p>Loading admin details...</p>
              )}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default AdminProfile;
