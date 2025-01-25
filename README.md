# Customer Management API

## Overview

This project is a Customer Management API built with Node.js and Express. It allows users to manage customer data, including creating, updating, and retrieving customer information.

## Setup Instructions

1. **Clone the repository:**

   ```bash
   git clone https://github.com/Rajeswara44/wisdompeak_Backend.git
   cd wisdompeak_Backend/customer-management
   ```

2. **Install dependencies:**

   ```bash
   npm install
   ```

3. **Set up environment variables:**
   Create a `.env` file in the root directory and add the following variables:

   ```
   DATABASE_URL=your_database_url
   JWT_SECRET=your_jwt_secret
   ```

4. **Run the application:**
   ```bash
   npm start
   ```

## API Documentation

- **Base URL:** `http://localhost:3000/api`
- **Endpoints:**
  - `POST /customers`: Create a new customer.
  - `GET /customers`: Retrieve all customers.
  - `GET /customers/:id`: Retrieve a specific customer by ID.
  - `PUT /customers/:id`: Update a specific customer by ID.
  - `DELETE /customers/:id`: Delete a specific customer by ID.

## Demo (Optional)

You can deploy the backend on platforms like Heroku or AWS and provide the base URL here.

## License

This project is licensed under the ISC License.
