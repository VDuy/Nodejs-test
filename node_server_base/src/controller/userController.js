const {Account} = require('../models');
const accountService = require('../services/userService');
const { apiCode } = require('../utils/constant');



async function getAllAccount(req, res) {
    try {
        var data = await accountService.getAllAccount();
        return data;
    } catch (error) {
        console.log(error);
    }
}
async function getAccountById(req, res) {
    try {
        var data = await accountService.getAccountById();
        return data;
    } catch (error) {
        debug.log(error);
        return Promise.reject({
            code: error.code || apiCode.DB_ERROR,
        });
    }
}
async function createAccount(req, res){
    try {
        var data = await accountService.createAccount();
        return data
    } catch (error) {
        debug.log(error);

    }
}

module.exports = {
    getAllAccount,
    getAccountById,
    createAccount,

};