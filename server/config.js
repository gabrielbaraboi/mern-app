const dotenv = require('dotenv');
const dotenvExpand = require('dotenv-expand')
let myEnv = dotenv.config();
dotenvExpand(myEnv)

module.exports = {
    port: process.env.PORT || 9000,
    app_url: process.env.APP_URL || 'http://localhost:3000',
    api_url: process.env.API_URL || 'http://localhost:9000/api',
    mongo_url: process.env.MONGO_URL,
  };