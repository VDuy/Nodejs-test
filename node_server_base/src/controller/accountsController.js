const {account} = require('../models');
const accountService = require('../services/accountsService');
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


module.exports = {
    getAllAccount,
    getAccountById,

};