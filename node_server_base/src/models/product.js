
const Sequelize = require("sequelize");
const Model = Sequelize.Model;
var sequelize = require(__dirname + "/../config/env.js");
const sequelize = new Sequelize('sqlite::memory:');
const product = sequelize.define('Product', {
    productId: {
        type: Sequelize.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement,
    },
    display: {
        type: Sequelize.STRING(255),
        allowNull: true,
    },
    descrition: {
        type: Sequelize.STRING(255),
        allowNull: true,
    },
    status: {
        type: Sequelize.STRING(255),
        allowNull: true,
    },
    created_at: {
        type: Sequelize.DATE,
        allowNull: true,
        defaultValue: sequelize.literal("CURRENT_TIMESTAMP"),
        defaultValue: sequelize.literal("CURRENT_TIMESTAMP"),
    },
},
    {
        sequelize,
        modelName: "product",
        freezeTablename: true,
        timestamps: false,
    });

sequelize.models.product