const express = require('express');
const path = require('path')
const cors = require("cors");
const bodyParser = require('body-parser');
const db = require('./models');
const app = express();

app.use(express.json());

app.use(express.urlencoded({ extended: true }));

app.get("/", (req, res) => {
    const data = {
        username: 'duy',
        password: '12345'
    }
    res.send(data)
})

const PORT = process.env.PORT || 8081;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}.`);
});

module.exports = app;