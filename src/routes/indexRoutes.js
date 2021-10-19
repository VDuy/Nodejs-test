const express = require("express");
const indexController = require('../controller/indexController');
const userController = require('../controller/userController');
const response = require('../common/response');
const { tryCatch } = require("../middlewares/errorHandle");
let router = express.Router();

let initRoutes = (app) => {

    router.get("/", (req, res) => {
        return res.send('hello')
    });

    router.get("/homepage", indexController.homepage);

    router.get('/signup', indexController.createUserview);
    //  router.get('/signin', );

    router.get('/alluser', indexController.getAllUserView);
    router.get('/create', tryCatch(indexController.createUserview));

    router.get('/delete', tryCatch(userController.deleteUser));

    return app.use("/api/v1", router);

}

module.exports = initRoutes;