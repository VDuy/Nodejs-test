const express = require("express");

//const Indexs = require('../models/index')
const indexController = require('../controller/indexController');
// const response = require('../common/response');
let router = express.Router();

let initRouter = (app) => {
    router.get("/", indexController.homepage);
   return  app.use("/", router);
 
}

module.exports = initRouter;