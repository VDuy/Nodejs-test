const { Sequelize } = require("sequelize");
const Model = Sequelize.Model;

const sequelize = require(__dirname + "/../config/env.js");

class accounts extends Model { }
accounts.init(
  {
    id: {
      type: Sequelize.INTERGER,
      allowNull: false,
      primarykey: true,
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
      type: Sequelize.INTERGER,
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
    modelName: "user",
    timestamps: false,
  }
);

module.exports = () => accounts;

