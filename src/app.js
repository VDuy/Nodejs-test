const { dotenv } = require('dotenv').config();

const express = require('express');

const path = require('path');
const cors = require("cors");
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const db = require('./models');


//const response = require('./common/response');

const usersRoute = require('./routes/userRoutes');

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(cors());
app.use(cookieParser());



usersRoute(app);



const PORT = process.env.PORT;
app.listen(PORT, (err) => {
  if (err) {
    console.log(`error` + err);
  } else {
    console.log(`API is running at port : ${PORT}`);
  }
})

module.exports = app;