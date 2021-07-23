const {Sequelize} = require("sequelize");
const Model = Sequelize.Model;

const sequelize = require(__dirname + "/../config/env.js");

class category extends Model{}
category.init(
  {
    category_id:{
    type: Sequelize.STRING(100),
    allowNull: false,
    primarykey: true,
    },
    display:{
      type: Sequelize.STRING(100),
      allowNull: false,
    },
    description:{
      type: Sequelize.STRING(100),
      allowNull: false,
    },
    imgeURL:{
      type: Sequelize.STRING(100),
      allowNull: false,
    },
       },
    {
    sequelize,
    modelName: "category",
    timestamps: false,
    }
);

module.exports = () => category;

