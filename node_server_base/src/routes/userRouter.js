var express = require('express');
const Account = require('../models/user')
const accountController = require('../controller/userController');
const response = require('../common/response');
var router = express.Router();


router.get('/list', async (req, res, next) => {
    try {
        const accounts = await accountController.getAllAccount(req, res, next);
        res.json(response.success(accounts));
    } catch (error) {
        res.json(response.error(error.code, error.msg));
    }
});

router.get('/:id', async (req, res, next) => {
    try {
        const accounts = await accountController.getAccountById(req, res, next);
        res.json(response.success(accounts));
    } catch (error) {
        res.json(response.error(error.code, error.msg));
    }
});
router.post('/', async (req, res, next) => {
    try {
        const accounts = await accountController.createAccount(req, res, next);
        res.json(response.success(accounts));
    } catch (error) {
        res.json(response.error(error.code, error.msg));
    }
});
// router.put('/:id', updateAccount)
// router.delete('/:id', deleteAccount)

module.exports = router;