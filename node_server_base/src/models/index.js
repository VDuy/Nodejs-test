
const path      = require('path');
var Sequelize = require('sequelize');
var sequelize = require('../config/env.js')
const db        = {};


db.Sequelize = Sequelize;
db.sequelize = sequelize;

module.exports = db;