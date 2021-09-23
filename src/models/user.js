'use strict'
const {Model, Sequelize, DataTypes} = require("sequelize");

var sequelize = require(__dirname + "/../config/env.js");
class user extends Model { }
user.init(
  {
    id: {
      type: Sequelize.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    user_name: {
      type: Sequelize.STRING(255),
      allowNull: true,
    },
    password: {
      type: Sequelize.STRING(200),
      allowNull: false,
    },
    full_name: {
      type: Sequelize.STRING(255),
      allowNull: true,
    },
    phone: {
      type: Sequelize.STRING(32),
      allowNull: true,
    },
    email: {
      type: Sequelize.STRING(45),
      allowNull: true,
    },
    role: {
      type: Sequelize.STRING(45),
      allowNull: false,
    },
    created_at: {
      type: Sequelize.DATE,
      allowNull: false,
      defaultValue: sequelize.literal("CURRENT_TIMESTAMP"),
    },
  },
  {
    sequelize,
    modelName: 'user',
    freezeTablename: true,
    timestamps: false,
  }
);

module.exports = () => user;

