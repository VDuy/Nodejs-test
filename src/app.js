const { dotenv } = require('dotenv').config();

const express = require('express');
const path = require('path');

const cors = require("cors");
//const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const db = require('./models');
const app = express();

//const configView = require("./config/views")

const response = require('./common/response');


app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));
app.use(cors());
app.use(cookieParser());

app.use('/', require('./routes/indexRoutes'));
app.use('/user', require('./routes/indexRoutes'));

//indexRouter(app);
//configView(app);

// // error handler
app.use(function (err, req, res, next) {
  // // render the error page
  res.status(err.status || 500);
  res.json(response.error({
    code: 404,
    message: 'API not found'
  }))
  console.log(message);

  // // res.render('error');
});


app.get('/', (req, res) => {
  res.send('Hi!')
})


const PORT = process.env.PORT;
app.listen(PORT, (err) => {
  if (err) {
    console.log(`error`+ err);
  } else {
    console.log(`API running at ${PORT}`);
  }
})

module.exports = app;