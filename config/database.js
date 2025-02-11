const { Sequelize } = require('sequelize');

// Create a new instance of Sequelize
const sequelize = new Sequelize(process.env.DB_NAME, process.env.DB_USER, process.env.DB_PASSWORD, {
  host: process.env.DB_HOST,
  dialect: 'postgres', // or 'mysql' depending on your database
});

// Error handling for database connection
sequelize.authenticate()
  .then(() => {
    console.log('Database connected successfully.');
  })
  .catch((error) => {
    console.error('Unable to connect to the database:', error);
  });

module.exports = sequelize;
