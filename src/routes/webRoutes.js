const express = require("express");


const indexController = require('../controller/indexController');
// const response = require('../common/response');
const router = express.Router();

const initRoutes = (app) => {
    router.get("/homepage",
        indexController.homepage);


    return app.use("/api/v1", router);

}

module.exports = initRoutes;