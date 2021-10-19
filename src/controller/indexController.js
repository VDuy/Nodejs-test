//const { user } = require('../models');
const indexServices = require('../services/indexServices');
//const userService = require('../services/userServices');
const { apiCode } = require('../utils/constant');


const homepage = (req, res) => {
    return res.render('home.ejs')
}
const getAllUserView = async (req, res) => {
    try {
        let data = await indexServices.getAllUserView();
        return res.render('allUser.ejs', {
            dataTable: data
        });
    } catch (error) {
        debug.log(error)
    }
}
const createUserview = (req, res) => {
    return res.render("createUser.ejs")
}





module.exports = {
    homepage: homepage,
    getAllUserView: getAllUserView,
    createUserview: createUserview,

};