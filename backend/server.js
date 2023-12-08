const express = require('express');
const mongoose = require('mongoose');
const { APP_PORT, DB_URL } = require('./config');
const errorHandler = require('./middlewares/errorHandler');
const app = express();
const routes = require('./routes');
const path = require('path');
const cors = require('cors');

const PORT = process.env.PORT || APP_PORT

//DB connection
mongoose.connect(DB_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'Connection error:'));
db.once('open', () => console.log('DB connected ...'));

global.appRoot = path.resolve(__dirname);
const corsOptions = {
    origin: 'http://localhost:3000',
    credentials: true,
    optionSuccessStatus: 200
}
app.use(cors(corsOptions));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use('/api', routes);
app.use("/uploads", express.static(path.join(__dirname, "/uploads")));

app.use(errorHandler)
app.listen(PORT, () => console.log(`Listening on port ${PORT} ...`));