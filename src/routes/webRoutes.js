const express = require("express");


const indexController = require('../controllers/indexController');
// const response = require('../common/response');
let router = express.Router();

let initRoutes = (app) => {
    router.get("/",
        indexController.homepage);


    return app.use("/", router);

}

module.exports = initRoutes;