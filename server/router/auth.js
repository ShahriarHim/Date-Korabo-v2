const express = require('express');
const router = express.Router();

const jwt = require('jsonwebtoken');

const passport = require('passport'); // Add this line

require("dotenv").config();


require('../db/conn')
const User = require('../model/userSchema');
const Admin = require('../model/adminSchema');



router.post('/aSign-up', async (req, res) => {
  const { name, email, phone, password, cPassword, keyword } = req.body;

  if (!name || !email || !phone || !password || !cPassword || !keyword) {
      return res.status(422).json({ error: "Please fill all the fields properly!" });
  }

  try {
      const adminExist = await Admin.findOne({ email: email });

      if (adminExist) {
          return res.status(422).json({ error: 'Account already exists!' });
      } else if (password !== cPassword) {
          return res.status(422).json({ error: 'Password does not match!' });
      } else {
          const admin = new Admin({ name, email, phone,  password, cPassword, keyword });
          const adminRegister = await admin.save();

          if (adminRegister) {
              res.send({
                  success: true,
                  message: "Admin is created Successfully",
                  admin: {
                      id: admin._id,
                      adminName: admin.name,
                  },
              });
          } else {
              res.status(500).json({ error: 'Registration failed!' });
          }
      }
  } catch (error) {
      console.log(error);
      res.status(500).json({ error: 'Something went wrong!' });
  }
});


router.post('/aSign-in', async (req, res) => {
  const { email, password } = req.body;
  if (!email || !password) {
      return res.status(400).json({error:"Please fill the field properly!"})

  }
  const admin = await Admin.findOne({email:email});
  if (!admin) {
      return res.status(401).send({
        success: false,
        message: "Admin is not found",
        error:"error"
      });
    }
    if (password !== admin.password) {
      return res.status(401).send({
          success: false,
          message: "Admin login not successful",
          error: "Invalid password",
      });
  }
  
  const payload = {
      id: admin._id,
      adminName: admin.name,
    };
    const aToken = jwt.sign(payload, process.env.SECRET_KEY, {
      expiresIn: "2d"},
    );
    res.cookie("jwtoken", aToken, {
      httpOnly: true, // This makes the cookie inaccessible from JavaScript
      secure: process.env.NODE_ENV === "production", // Use secure cookies in production
      maxAge: 2 * 24 * 60 * 60 * 1000, // Cookie expiration time (2 days)
  });
    return res.status(200).send({
      success: true,
      message: "Admin is logged in successfully",
      adminName: admin,
      token: "Bearer " + aToken,
    }); 

}  
);

router.get('/a-bot',
  passport.authenticate('jwt', { session: false }),
  function (req, res) {
    return res.status(200).send({
      success: true,
  
      user: {
        id: req.user._id,
        adminName: req.user.name, 
      },
    });
  }
);

// user part////////////////////////////////////////////

router.get('/bot',
  passport.authenticate('jwt', { session: false }),
  function (req, res) {
    return res.status(200).send({
      success: true,
      user: {
        id: req.user._id,
        username: req.user.name, 
      },
    });
  }
);
router.get('/logout', (req, res) => {
  res.clearCookie('jwtoken'); // Clear the JWT token cookie
  return res.status(200).send({
      success: true,
      message: "User has been logged out successfully"
  });
});

router.post('/sign-up', async (req, res) => {
    const { name, email, phone, occupation, password, cPassword } = req.body;

    if (!name || !email || !phone || !occupation || !password || !cPassword) {
        return res.status(422).json({ error: "Please fill all the fields properly!" });
    }

    try {
        const userExist = await User.findOne({ email: email });

        if (userExist) {
            return res.status(422).json({ error: 'Account already exists!' });
        } else if (password !== cPassword) {
            return res.status(422).json({ error: 'Password does not match!' });
        } else {
            const user = new User({ name, email, phone, occupation, password, cPassword });
            const userRegister = await user.save();

            if (userRegister) {
                res.send({
                    success: true,
                    message: "User is created Successfully",
                    user: {
                        id: user._id,
                        username: user.name,
                    },
                });
            } else {
                res.status(500).json({ error: 'Registration failed!' });
            }
        }
    } catch (error) {
        console.log(error);
        res.status(500).json({ error: 'Something went wrong!' });
    }
});

router.post('/sign-in', async (req, res) => {
        const { email, password } = req.body;
        if (!email || !password) {
            return res.status(400).json({error:"Please fill the field properly!"})

        }
        const user = await User.findOne({email:email});
        if (!user) {
            return res.status(401).send({
              success: false,
              message: "User is not found",
              error:"something went wrong"
            });
          }
          if (password !== user.password) {
            return res.status(401).send({
                success: false,
                message: "User login not successful",
                error: "Invalid password",
            });
        }
        
        const payload = {
            id: user._id,
            userName: user.name,
          };
          const token = jwt.sign(payload, process.env.SECRET_KEY, {
            expiresIn: "2d"},
          );
          res.cookie("jwtoken", token, {
            httpOnly: true, // This makes the cookie inaccessible from JavaScript
            secure: process.env.NODE_ENV === "production", // Use secure cookies in production
            maxAge: 2 * 24 * 60 * 60 * 1000, // Cookie expiration time (2 days)
        });
          return res.status(200).send({
            success: true,
            message: "User is logged in successfully",
            vavago: user,
            token: "Bearer " + token,
          }); 

    }  
);
//for about me // 
router.get('/user/:id', async (req, res) => {
  const userId = req.params.id;

  try {
    const user = await User.findById(userId);
    if (!user) {
      return res.status(404).json({ error: 'User not found' });
    }
    res.status(200).json(user);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Server error' });
  }
});

router.get('/admin/:id', async (req, res) => {
  const userId = req.params.id;

  try {
    const user = await Admin.findById(userId);
    if (!user) {
      return res.status(404).json({ error: 'User not found' });
    }
    res.status(200).json(user);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Server error' });
  }
});
// Fetch all users
router.get('/user-all', async (req, res) => {
  try {
    const users = await User.find();
    res.status(200).json(users);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Something went wrong' });
  }
});

// delete user------
router.delete('/user/:id', async (req, res) => {
  const userId = req.params.id;

  try {
    const user = await User.findById(userId);
    if (!user) {
      return res.status(404).json({ error: 'User not found' });
    }

    await user.remove();

    res.status(200).json({ message: 'User deleted successfully' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Server error' });
  }
});




module.exports = router;