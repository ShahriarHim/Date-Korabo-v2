import React, { useState } from 'react';
import axios from 'axios';

function MenuDetails() {
  const [menuInfo, setMenuInfo] = useState({
    res_id: '',
    item_name: '',
    cost: '',
    food_type: '',
  });

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setMenuInfo({
      ...menuInfo,
      [name]: value,
    });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      await axios.post('/restaurant/createMenu', menuInfo);
      alert('Menu item created successfully');
      // Clear form

      setMenuInfo({
        res_id: '',
        item_name: '',
        cost: '',
        food_type: '',
      });
    } catch (error) {
      console.error(error);
      alert('Restaurant is not registered');
    }
  };

  return (
    <div className="contact-form" style={{ maxWidth: "400px", margin: "10px", paddingBottom:'30px'}}>
      <h3 className="text-muted mb-3">Create Menu Item</h3>
      <form className="comment-form" id="comment-form" onSubmit={handleSubmit}>
        <div className="form-group">
          <input
            type="text"
            className="form-control"
            name="res_id"
            placeholder="Restaurant Name"
            value={menuInfo.res_id}
            onChange={handleInputChange}
            style={{ width: "100%" }}
          />
        </div>
        <div className="form-group">
          <input
            type="text"
            className="form-control"
            name="item_name"
            placeholder="Item Name"
            value={menuInfo.item_name}
            onChange={handleInputChange}
            style={{ width: "100%" }}
          />
        </div>
        <div className="form-group">
          <input
            type="number"
            className="form-control"
            name="cost"
            placeholder="Cost"
            value={menuInfo.cost}
            onChange={handleInputChange}
            style={{ width: "100%" }}
          />
        </div>
        <div className="form-group">
          <select
            name="food_type"
            className="form-control"
            value={menuInfo.food_type}
            onChange={handleInputChange}
            style={{ width: "100%" }}
          >
            <option value="">Select Food Type</option>
            <option value="starter">Starter</option>
            <option value="main">Main</option>
            <option value="dessert">Dessert</option>
          </select>
        </div>
        <br/>
        <div className="form-group">
          <button
            type="submit"
            className="btn btn-primary"
            style={{ width: "100%" }}
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
}

export default MenuDetails;
