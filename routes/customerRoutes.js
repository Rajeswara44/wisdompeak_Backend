const express = require('express');
const { createCustomer } = require('../controllers/customerController');

const router = express.Router();

// Create customer route
router.post('/', createCustomer);

// Additional customer routes can be added here

module.exports = router;
