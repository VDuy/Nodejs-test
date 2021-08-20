const { dotenv } = require('dotenv').config();

//var sequelize = require('./config/env');
var express = require('express');
var path = require('path');
const cors = require("cors");
// const bodyParser = require('body-parser');

//var db = require('./models');
var app = express();

var indexRouter = require('./routes');
var accountsRouter = require('./routes/userRouter');

const response = require('./common/response');


app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));
app.use(cors());

app.use('/', indexRouter);
app.use('/account', accountsRouter);





const PORT = process.env.PORT;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}.`);
});

module.exports = app;