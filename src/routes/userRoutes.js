'use strict';
const express = require("express");
const userController = require('../controller/userController.js');

const router = express.Router();
const userRoutes = (app) => {

    router.post('/signup', userController.signup);
    router.post('/signin', userController.signin);

    return app.use("/user")
};
module.exports = userRoutes;