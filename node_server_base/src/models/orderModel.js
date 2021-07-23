const {Sequelize} = require("sequelize");
const Model = Sequelize.Model;

const sequelize = require(__dirname + "/../config/env.js");

class order extends Model{}
order.init(
  {
    order_id:{
    type: Sequelize.STRING(100),
    allowNull: false,
    primarykey: true,
    },
    user_name:{
      type: Sequelize.STRING(100),
      allowNull: flase,
    },
    productId:{
      type: Sequelize.STRING(100),
      allowNull: false,
    },
    price:{
      type: Sequelize.INTERGER,
      allowNull: false,
    },
    amount:{
      type: Sequelize.INTERGER,
      allowNull: false,
    },
    note:{
      type: Sequelize.STRING(100),
      allowNull: true,
    },
    status:{
      type: Sequelize.STRING(100),
      allowNull: true,
    },
      isDelete:{
        type: Sequelize.INTERGER,
        defaultValue: 0,
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
    modelName: "order",
    timestamps: false,
    }
);

module.exports = () => order;

