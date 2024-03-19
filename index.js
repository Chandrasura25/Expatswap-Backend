const express = require('express');
const app = express();
require('dotenv').config();
const cors = require('cors');
const bodyParser = require('body-parser');
const mongoose = require('mongoose'); 
const userRoutes = require('./routes/userRoutes');

const port = process.env.PORT; 
const MONGODB_URI = process.env.MONGODB_URI;

// Middlewares
app.use(cors());
app.use(express.json()); // Handles JSON requests effectively
app.use(bodyParser.urlencoded({extended:true}));
// Routes
app.use("/user", userRoutes);

(async () => {
  try {
    await mongoose.connect(MONGODB_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log(`Connected to MongoDB database`);

    // Start server only after successful connection
    app.listen(port, () => {
      console.log(`Server is listening on port ${port}`);
    });
  } catch (error) {
    console.error('Error connecting to MongoDB or starting server:', error);
    process.exit(1); 
  }
})();