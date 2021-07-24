const express = require('express');
const path = require('path')
const cors = require("cors");
const bodyParser = require('body-parser');
const db = require('./models');
const app = express();

app.use(express.json());

app.use(express.urlencoded({extended: this.true}));

app.get("/", (req, res)=>{
    res.json({message: "Welcome..."})
})



const PORT = process.env.PORT || 8081;
app.listen(PORT,()=>{
    console.log(`Server running on port ${PORT}.`);
});

module.exports = app;