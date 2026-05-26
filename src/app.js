const express = require('express');
const authRoute = require('./routes/authRoutes');
const cookieParser = require('cookie-parser');
const foodRoute = require('./routes/foodRoutes');

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true}));
app.use(cookieParser());

app.use('/api/auth',authRoute);
app.use('/api/fooditems',foodRoute);

module.exports = app;