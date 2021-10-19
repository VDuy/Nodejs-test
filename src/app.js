'use strict';
const { dotenv } = require('dotenv').config();
require("./config/database").connect();
const express = require('express');
const app = express();

const path = require('path');
const cors = require("cors");
const cookieParser = require('cookie-parser');
// const bodyParser = require('body-parser');

// //const db = require('./models');

// //const response = require('./common/response');


// app.use(bodyParser.json());
// app.use(bodyParser.urlencoded({extended: true}));
// app.use(cors());
// app.use(cookieParser());







const mongoose = require('mongoose');
const User = require('./models/user');
const bodyParser = require('body-parser');
const jsonwebtoken = require("jsonwebtoken");

// mongoose.Promise = global.Promise;
// mongoose.connect(
//   process.env.DB_CONNECT,
//   () => console.log('Connected to DB')
// );

const userRoutes = require('./routes/userRoutes');
const viewEngine = require("./config/viewEngine");
const webRoute = require("./routes/indexRoutes");

//userRoutes(app);
viewEngine(app);
webRoute(app);

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// app.use(function (req, res, next) {
//   if (req.headers && req.headers.authorization && req.headers.authorization.split(' ')[0] === 'JWT') {
//     jsonwebtoken.verify(req.headers.authorization.split(' ')[1], 'RESTFULAPIs', function (err, decode) {
//       if (err) req.user = undefined;
//       req.user = decode;
//       next();
//     });
//   } else {
//     req.user = undefined;
//     next();
//   }
// });




const PORT = process.env.PORT || 3000;
app.listen(PORT);
console.log('API server started on: ' + PORT);
module.exports = app;