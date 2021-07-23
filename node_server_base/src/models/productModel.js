const {Sequelize} = require("sequelize");
const Model = Sequelize.Model;

const sequelize = require(__dirname + "/../config/env.js");

class product extends Model{}
product.init(
  {
    product_id:{
    type: Sequelize.STRING(100),
    allowNull: false,
    primarykey: true,
    },
    display:{
      type: Sequelize.STRING(100),
      allowNull: true,
    },
    provider:{
      type: Sequelize.STRING(100),
      allowNull: true,
    },
    description:{
      type: Sequelize.STRING(100),
      allowNull: true,
    },
    imageUrl:{
      type: Sequelize.STRING(100),
      allowNull: true,
    },
    priceIn:{
      type: Sequelize.INTERGER,
      allowNull: true,
    },
    priceOut:{
      type: Sequelize.INTERGER,
      allowNull: true,
    },
    priceSale:{
      type: Sequelize.INTERGER,
      allowNull: true,
    },
    shipday:{
      type: Sequelize.INTERGER,
      allowNull: true,
    },
    insock:{
      type: Sequelize.INTERGER,
      allowNull: true,
    },
    status:{
      type: Sequelize.STRING(100),
      allowNull: true,
    },
    isDelete:{
      type: Sequelize.INTERGER,
      allowNull: true,
    },
    isDelete:{
        type: Sequelize.INTERGER,
        allowNull: true,
        defaultValue: 0,
    },
    category_id:{
      type: Sequelize.STRING(100),
      allowNull: true,
      },
    created_at: {
      type: Sequelize.DATE,
      allowNull: true,
      defaultValue: sequelize.literal("CURRENT_TIMESTAMP"),
    },
    update_at: {
      type: Sequelize.DATE,
      allowNull: true,
      defaultValue: sequelize.literal("CURRENT_TIMESTAMP"),
    },
  },

    {
    sequelize,
    modelName: "product",
    timestamps: false,
    }
);

module.exports = () => product;

