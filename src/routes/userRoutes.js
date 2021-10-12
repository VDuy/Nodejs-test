'use strict';
const express = require("express");
const userController = require('../controller/userController.js');

const router = express.Router();
const userRoutes = (app) => {

    router.post('/register', userController.register);
    router.post('/signin', userController.sign_in);

    return app.use("/user")
};
module.exports = userRoutes;