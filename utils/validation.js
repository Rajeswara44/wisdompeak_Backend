const Joi = require('joi');

// Validation schema for user registration
const userRegistrationSchema = Joi.object({
  name: Joi.string().required(),
  email: Joi.string().email().required(),
  password: Joi.string().min(6).required(),
});

// Validation schema for customer creation
const customerCreationSchema = Joi.object({
  name: Joi.string().required(),
  email: Joi.string().email().required(),
  phone: Joi.string().required(),
  company: Joi.string().optional(),
});

// Export validation schemas
module.exports = {
  userRegistrationSchema,
  customerCreationSchema,
};
