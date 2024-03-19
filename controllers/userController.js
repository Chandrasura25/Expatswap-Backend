const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const User = require('../models/user.model');

// CreateUser Controller
exports.createUser = async (req, res) => {
  try {
    const existingUser = await User.findOne({ email: req.body.email });
    if (existingUser) {
      return res.status(400).json({ message: "User already exists" });
    }

    const hashedPassword = await bcrypt.hash(req.body.password, 10);

    const user = new User({
      firstname: req.body.firstname,
      lastname: req.body.lastname,
      email: req.body.email,
      password: hashedPassword,
      phone_number: req.body.phone_number,
      date_of_birth: req.body.date_of_birth
    });

    await user.save();

    res.status(201).json({ message: "User created successfully" });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// getAllUsers Controller
exports.getAllUsers = async (req, res) => {
try {
        // Pagination parameters
        const page = parseInt(req.query.page) || 1;
        const limit = parseInt(req.query.limit) || 10;
        const skip = (page - 1) * limit;

        const fromDate = req.query.from ? new Date(req.query.from) : null;
        const toDate = req.query.to ? new Date(req.query.to) : null;

        // Build filter object based on date of birth range
        const filter = {};
        if (fromDate && toDate) {
            filter.dateOfBirth = { $gte: fromDate, $lte: toDate };
        } else if (fromDate) {
            filter.dateOfBirth = { $gte: fromDate };
        } else if (toDate) {
            filter.dateOfBirth = { $lte: toDate };
        }

        const users = await User.find(filter).select('-password').skip(skip).limit(limit);
        const totalUsers = await User.countDocuments(filter);

        const totalPages = Math.ceil(totalUsers / limit);

        // Send response
        res.status(200).json({
            users,
            totalUsers,
            currentPage: page,
            totalPages
        });
    } catch (error) {
        console.error('Error fetching users:', error);
        res.status(500).json({ error: 'Internal server error' });
    }
};