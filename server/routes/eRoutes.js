const express = require('express');
const ExampleModel = require('../models/Model');

const router = express.Router();

// Define API routes for CRUD operations

// ...

router.get('/examples', async (req, res) => {
    try {
      const data = await ExampleModel.find();
      res.json(data);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  });
  
  // ...
  
module.exports = router;

