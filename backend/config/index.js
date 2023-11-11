const dotenv = require('dotenv');
dotenv.config();

module.exports = {
    APP_PORT,
    DB_URL,
    DEBUG_MODE,
} = process.env;