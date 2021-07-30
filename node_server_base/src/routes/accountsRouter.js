var express = require('express');
const Accounts = require('../models/accountsModel')
const accountController = require('../controller/accountsController');
const { response } = require('../common/response');
var Route = express.Router();


Route.get('/getall', async (req, res, next) => {
    try {
        const accounts = await accountController.getAllAccount(req, res, next);
        res.json(response.success(accounts));
    } catch (error) {
        res.json(response.error(error.code, error.msg));
    }
});
// Route.get('/:id', getAccountById);
// Route.post('/', createAccount)
// Route.put('/:id', updateAccount)
// Route.delete('/:id', deleteAccount)