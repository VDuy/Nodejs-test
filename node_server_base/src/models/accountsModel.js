"use strict";

const Sequelize = require("sequelize");
const Model = Sequelize.Model;
var sequelize = require(__dirname + "/../config/env.js");
class accounts extends Model { }
accounts.init(
  {
    id: {
      type: Sequelize.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },

    full_name: {
      type: Sequelize.STRING(255),
      allowNull: true,
    },
    user_name: {
      type: Sequelize.STRING(255),
      allowNull: true,
    },
    phone: {
      type: Sequelize.STRING(32),
      allowNull: false,
    },
    password: {
      type: Sequelize.STRING(200),
      allowNull: false,
    },
    email: {
      type: Sequelize.STRING(45),
      allowNull: true,
    },
    role: {
      type: Sequelize.INTEGER,
      allowNull: false,
    },
    created_at: {
      type: Sequelize.DATE,
      allowNull: false,
      //      defaultValue: sequelize.literal("CURRENT_TIMESTAMP"),
    },
  },
  {
    sequelize,
    modelName: "user",
    freezeTablename: true,
    timestamps: false,
  }
);
console.log(accounts === sequelize.models.accounts);
module.exports = () => accounts;

