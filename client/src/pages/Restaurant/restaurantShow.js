import React, { useEffect, useState } from 'react';
import axios from 'axios';

function RestaurantsShow() {
  const [restaurants, setRestaurants] = useState([]);

  useEffect(() => {
    async function fetchRestaurants() {
      try {
        const response = await axios.get('/restaurant/all'); // Update the endpoint URL
        setRestaurants(response.data);
      } catch (error) {
        console.error(error);
      }
    }

    fetchRestaurants();
  }, []);

  return (
    <div>
      <h3 className="text-muted mb-0" >Restaurant List</h3>
      <br />
      {restaurants.length === 0 ? (
        <p>No restaurants available</p>
      ) : (
        <table className="table">
          <thead className="thead-light">
            <tr>
              <th className="text-muted mb-0">Name</th>
              <th className="text-muted mb-0">Type</th>
              <th className="text-muted mb-0">Location</th>
              <th className="text-muted mb-0">Contact</th>
              <th className="text-muted mb-0">Availability</th>
              <th className="text-muted mb-0">Image</th>
            </tr>
          </thead>
          <tbody>
            {restaurants.map((restaurant) => (
              <tr key={restaurant._id}>
                <td className="text-muted mb-0" >{restaurant.name}</td>
                <td className="text-muted mb-0" >{restaurant.type}</td>
                <td className="text-muted mb-0" >{restaurant.location}</td>
                <td className="text-muted mb-0" >{restaurant.contact}</td>
                <td className="text-muted mb-0" >{restaurant.restaurantAvailability}</td>
                <td>
                  <img
                    src={`/public/uploads/${restaurant.image}`} // Adjust the image URL path
                    alt={restaurant.name}
                    style={{ maxWidth: '200px' }}
                  />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
}

export default RestaurantsShow;
