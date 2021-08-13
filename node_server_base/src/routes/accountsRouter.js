var express = require('express');
const Accounts = require('../models/accountsModel')
const accountController = require('../controller/accountsController');
const { response } = require('../common/response');
var router = express.Router();


router.get('/', async (req, res, next) => {
    try {
        const accounts = await accountController.getAllAccount(req, res, next);
        res.json(response.success(accounts));
    } catch (error) {
        res.json(response.error(error.code, error.msg));
    }
});

 router.get('/:id',async (req, res, next) => {
    try {
        const accounts = await accountController.getAccountById(req, res, next);
        res.json(response.success(accounts));
    } catch (error) {
        res.json(response.error(error.code, error.msg));
    }
});
// router.post('/', createAccount)
// router.put('/:id', updateAccount)
// router.delete('/:id', deleteAccount)

module.exports = router;