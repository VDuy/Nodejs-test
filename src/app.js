const { dotenv } = require('dotenv').config();

const express = require('express');
const app = express();

const path = require('path');
const cors = require("cors");
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const db = require('./models');


const response = require('./common/response');
const usersRouter = require('./routes/userRoutes');


app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));
app.use(cors());
app.use(cookieParser());

//app.use('/', indexRouter);
app.use('/user', usersRouter);




// // error handler
// app.use(function (err, req, res, next) {
//   // // render the error page
//   res.status(err.status || 500);
//   res.json(response.error({
//     code: 404,
//     message: 'API not found'
//   }))
//   console.log(message);

//   // // res.render('error');
// });




const PORT = process.env.PORT;
app.listen(PORT, (err) => {
  if (err) {
    console.log(`error`+ err);
  } else {
    console.log(`API is running at port : ${PORT}`);
  }
})

module.exports = app;