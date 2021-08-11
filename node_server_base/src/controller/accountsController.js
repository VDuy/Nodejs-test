const { accounts } = require('../models');
const accountService = require('../services/accountsService');


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
        console.log(error);
    }
}


module.exports = {
    getAllAccount,
    getAccountById,

};