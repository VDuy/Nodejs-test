const { dotenv } = require('dotenv').config();

// var sequelize = require('./config/env');
const express = require('express');
const path = require('path');
const cors = require("cors");
const bodyParser = require('body-parser');

const db = require('./models');
const app = express();

const configView = require("./config/views")
const indexRouter = require('./routes/indexRoutes');
const userRouter = require('./routes/userRouter');

const response = require('./common/response');
const excel = require("./excel/indexExcel");
excel;

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));
app.use(cors());

app.use('/', indexRouter);
app.use('/user', userRouter);

indexRouter(app);
configView(app);




const PORT = process.env.PORT || 8082;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}.`);
});

module.exports = app;