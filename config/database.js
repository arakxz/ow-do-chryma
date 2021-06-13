const dotenv = require('dotenv');
dotenv.config();

module.exports = {
  connection: {
    host: process.env.DB_HOST,
    database: process.env.DB_DATABASE
  },

  options: {
    auth: {
      authSource: "admin"
    },
    user: process.env.DB_USERNAME,
    pass: process.env.DB_PASSWORD,
    useNewUrlParser: true,
    useUnifiedTopology: true,
  },
};