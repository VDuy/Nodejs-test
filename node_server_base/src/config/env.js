const { Model } = require('sequelize');
const Sequelize = require('sequelize');


const env = {
    host: process.env.DB_HOST || "localhost",
    user: process.env.DB_USER || "root",
    password: process.env.DB_PASSWORD || "0983947663@",
    database: process.env.DB_NAME || "testwinsoft"
}

const sequelize = new Sequelize(env.database, env.user, env.password, {
    host: env.root,
    dialect: "mysql",

});



module.exports = sequelize;
