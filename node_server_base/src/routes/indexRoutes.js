const express = require("express");

const Indexs = require('../models/index')
const indexController = require('../controller/indexController');
// const response = require('../common/response');

const router = express.Router();
const initRouter = (app) => {
    router.get("/index", indexController.apps);
}

module.exports = initRouter;