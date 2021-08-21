const { Account } = require('../models');
const accountService = require('../services/userService');
const { apiCode } = require('../utils/constant');

async function homepage(req, res) {
    return res.render('index.ejs')

}

async function getAllUser(req, res) {
    try {
        var data = await accountService.getAllUser();
        return data;
    } catch (error) {
        console.log(error);
    }
}
async function getUserbyId(req, res) {
    try {
        var data = await accountService.getUserbyId();
        return data;
    } catch (error) {
        debug.log(error);
        return Promise.reject({
            code: error.code || apiCode.DB_ERROR,
        });
    }
}
async function createUser(req, res) {
    try {
        var data = await accountService.createUser();
        return data
    } catch (error) {
        debug.log(error);

    }
}


module.exports = {
    homepage: homepage,
    getAllUser,
    getUserbyId,
    createUser,

};