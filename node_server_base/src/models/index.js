
const path      = require('path');
const Sequelize = require('sequlize');
const sequelize = require('@config/env.js')
const db        = {};


db.Sequelize = Sequelize;
db.sequelize = sequelize;

module.exports = db;