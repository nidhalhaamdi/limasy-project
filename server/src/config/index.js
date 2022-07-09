require('dotenv').config();

module.exports = {
  PORT: process.env.PORT,
  jwtSecret: process.env.jwtSecret,
  MONGO_URL: process.env.MONGO_URL,
};