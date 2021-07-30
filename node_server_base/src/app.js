const {dotenv} = require('dotenv');
//dotenv.config()
var sequelize = require('./config/env');
var express = require('express');
var path = require('path');
// const cors = require("cors");
 const bodyParser = require('body-parser');

 
var db = require('./models');
var app = express();



app.use(express.json());

app.use(express.urlencoded({ extended: false }));

var indexRouter = require('./routes');
 var accountsRouter = require('./routes/accountsRouter');
 var categoryRouter = require('./routes/categoryRouter');

// app.use('/', indexRouter);
// app.use('/account', accountsRouter);


app.get("/", (request, response) => {
 //   console.log(request);
    const data = {
        username: 'duy',
        password: '12345'
    }
    response.send(data)
})


const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}.`);
});

module.exports = app;