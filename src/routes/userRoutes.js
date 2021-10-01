const express = require('express');
const Account = require('../models/user')
const userController = require('../controller/userController');
const response = require('../common/response');
const router = express.Router();


let userRoutes = (app) => {
router.get('/', async (req, res, next) => {
    try {
        const users = await userController.getAllUser(req, res, next);
        res.json(response.success(users));
    } catch (error) {
        res.json(response.error(error.code, error.msg));
        console.log(msg);
    }
});

router.get('/:id', async (req, res, next) => {
    try {
        const users = await userController.getUserbyId(req, res, next);
        res.json(response.success(users));
    } catch (error) {
        res.json(response.error(error.code, error.msg));
    }
});

router.post('/', async (req, res, next) => {
    try {
        const users = await userController.createUser(req, res, next);
        res.json(response.success(users));
    } catch (error) {
        res.json(response.error(error.code, error.msg));
    }
});
// router.put('/:id', updateUser)
// router.delete('/:id', deleteUser)
}
module.exports = userRoutes;