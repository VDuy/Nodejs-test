var fs = require('fs');
var path = require('path');
const Sequelize = require('sequelize');
var basename = path.basename(__dirname);
const sequelize = require('../config/env');

var db = {};


fs.readdirSync(__dirname).filter(file => {
        return (file.indexOf('.') !== 0) && (file !== basename) && (file.slice(-3) === '.js');
    })
//     .forEach(file => {
//         const model = sequelize.import(path.join(__dirname, file));
//         db[model.name] = model;
//     });

Object.keys(db).forEach(modelName => {
    if (db[modelName].associate) {
        db[modelName].associate(db);
    }
});


db.sequelize = sequelize;
db.Sequelize = Sequelize;

module.exports = db;