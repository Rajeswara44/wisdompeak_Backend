const Customer = require('../models/Customer');

// Create a new customer
exports.createCustomer = async (req, res) => {
  try {
    const { name, email, phone, company } = req.body;
    const newCustomer = await Customer.create({ name, email, phone, company });
    res.status(201).json({ message: 'Customer created successfully', customer: newCustomer });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// Additional customer-related functions can be added here
