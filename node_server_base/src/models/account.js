const {Sequelize, DataTypes} = require("sequelize");
const Model = Sequelize.Model;
var sequelize = require(__dirname + "/../config/env.js");
class Account extends Model { }
Account.init(
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
      type: DataTypes.STRING(45),
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
    modelName: 'Account',
    freezeTablename: true,
    timestamps: false,
  }
);

module.exports = () => account;

