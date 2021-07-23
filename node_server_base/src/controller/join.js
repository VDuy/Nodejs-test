const db = require("../models");
const productModel = require("../models/productModel");

const join = await 
accounts.findAll({
    include: {model: order,
    as: 'username'}
 });
accounts.findAll({
    include: [{
        model: productModel,
        right: true
    }]
});


console.log(JSON.stringify(accounts,null, 2));