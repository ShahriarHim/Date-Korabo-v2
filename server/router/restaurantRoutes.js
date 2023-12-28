const express = require('express');
const router = express.Router();
const Restaurant = require('../model/restaurantSchema');
const Menu = require('../model/RestaurantDetails');

const upload = require('../multerConfig'); // Import multer configuration



router.post('/create', upload.single('image'), async (req, res) => {   //http://localhost:5000/restaurant/create
    const { type, name, location, contact, restaurantAvailability} = req.body;
    const image = req.file.filename; // Get the uploaded image filename

    try {
        const existingRestaurant = await Restaurant.findOne({ name });

        if (existingRestaurant) {
            return res.status(422).json({ error: 'Restaurant with the same unique_ID already exists' });
        }

        const restaurant = new Restaurant({ type, name, location, contact, restaurantAvailability,image});
        const savedRestaurant = await restaurant.save();

        res.status(201).json({
            success: true,
            message: 'Restaurant created successfully',
            restaurant: savedRestaurant
        });
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Something went wrong' });
    }
});

router.get('/all', async (req, res) => {  //http://localhost:5000/restaurant/all
    try {
      const restaurants = await Restaurant.find();
      console.log(restaurants);
      res.status(200).json(restaurants);
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Something went wrong' });
    }
  });


  router.post('/createMenu', async (req, res) => {
    const { res_id, item_name, cost, food_type } = req.body;

    try {
        // Check if the provided res_id exists in the Restaurant collection
        const existingRestaurant = await Restaurant.findOne({ name: res_id });

        if (!existingRestaurant) {
            return res.status(422).json({ error: 'Restaurant does not exist for the provided res_id' });
        }

        const menuItem = new Menu({
            restaurant: existingRestaurant._id,
            item_name,
            cost,
            food_type
        });

        const savedMenuItem = await menuItem.save();

        res.status(201).json({
            success: true,
            message: 'Menu item created successfully',
            menuItem: savedMenuItem
        });
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Something went wrong' });
    }
});

  


router.get('/restaurantDetails', async (req, res) => {
    try {
      const restaurantDetails = await Menu.find();
      res.status(200).json(restaurantDetails);
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Something went wrong' });
    }
  });

// Import necessary modules and models

router.get('/all-types', async (req, res) => {
  try {
    const restaurantTypes = await Restaurant.aggregate([
      {
        $lookup: {
          from: 'RestaurantDetails',
          localField: '_id',
          foreignField: 'restaurant',
          as: 'menuItems'
        }
      },
      {
        $group: {
          _id: '$type',
          details: { $push: '$$ROOT' }
        }
      }
    ]);

    // Loop through each restaurant type and populate menuItems
    for (const type of restaurantTypes) {
      const menuItems = await Menu.find({ restaurant: { $in: type.details.map(detail => detail._id) } });
      type.details.forEach(detail => {
        detail.menuItems = menuItems.filter(item => item.restaurant.equals(detail._id));
      });
    }

    res.status(200).json(restaurantTypes);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Something went wrong' });
  }
});




module.exports = router;