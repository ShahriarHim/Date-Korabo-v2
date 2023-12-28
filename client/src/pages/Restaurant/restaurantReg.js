import React, { useState } from 'react';
import axios from 'axios';

function RestaurantReg() {
  const [restaurantInfo, setRestaurantInfo] = useState({
    type: '',
    name: '',
    location: '',
    contact: '',
    restaurantAvailability: '',
    image: null,
  });

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setRestaurantInfo({
      ...restaurantInfo,
      [name]: value,
    });
  };

  const handleImageChange = (event) => {
    setRestaurantInfo({
      ...restaurantInfo,
      image: event.target.files[0],
    });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    const formData = new FormData();
    formData.append('type', restaurantInfo.type);
    formData.append('name', restaurantInfo.name);
    formData.append('location', restaurantInfo.location);
    formData.append('contact', restaurantInfo.contact);
    formData.append('restaurantAvailability', restaurantInfo.restaurantAvailability);
    formData.append('image', restaurantInfo.image);

    try {
      await axios.post('http://localhost:5000/restaurant/create', formData);
      alert('Restaurant created successfully');
      // Clear form
      setRestaurantInfo({
        type: '',
        name: '',
        location: '',
        contact: '',
        restaurantAvailability: '',
        image: null,
      });
    } catch (error) {
      console.error(error);
      alert('Error creating restaurant');
    }
  };

  return (
    <div className="text-muted mb-0" style={{ maxWidth: "400px", margin: "10px", paddingBottom:'30px'}}>
      <h3 className="text-muted mb-3">Register Restaurant</h3>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <input
            type="text"
            name="type"
            placeholder="Type"
            value={restaurantInfo.type}
            onChange={handleInputChange}
            className="form-control"
            style={{ width: '100%' }}
          />
        </div>
        <div className="form-group">
          <input
            type="text"
            name="name"
            placeholder="Name"
            value={restaurantInfo.name}
            onChange={handleInputChange}
            className="form-control"
            style={{ width: '100%' }}
          />
        </div>
        <div className="form-group">
          <input
            type="text"
            name="location"
            placeholder="Location"
            value={restaurantInfo.location}
            onChange={handleInputChange}
            className="form-control"
            style={{ width: '100%' }}
          />
        </div>
        <div className="form-group">
          <input
            type="text"
            name="contact"
            placeholder="Contact"
            value={restaurantInfo.contact}
            onChange={handleInputChange}
            className="form-control"
            style={{ width: '100%' }}
          />
        </div>
        <div className="form-group">
          <input
            type="date"
            name="restaurantAvailability"
            placeholder="Restaurant Availability"
            value={restaurantInfo.restaurantAvailability}
            onChange={handleInputChange}
            className="form-control"
            style={{ width: '100%' }}
          />
        </div>
        <div className="form-group">
          <input
            type="file"
            name="image"
            accept="image/*"
            onChange={handleImageChange}
            className="form-control"
            style={{ width: '100%' }}
          />
        </div>
        <br/>
        <div className="form-group">
          <button
            type="submit"
            className="btn btn-primary"
            style={{ width: '100%' }}
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );

}

export default RestaurantReg;
