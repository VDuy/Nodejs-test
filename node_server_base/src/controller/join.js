const db = require("../models");
const productModel = require("../models/productModel");

var join = await 
accounts.findAll({
    include: {model: order, as: 'username'}
 });
accounts.findAll({
    include: [{
        model: product,
        right: true
    }]
});


console.log(JSON.stringify(accounts,null, 2));