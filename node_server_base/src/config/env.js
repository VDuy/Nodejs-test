const { Sequelize } = require('sequelize');


var env = {
    host: process.env.DB_HOST || "localhost",
    user: process.env.DB_USER || "root",
    password: process.env.DB_PASSWORD || "0983947663@",
    database: process.env.DB_NAME || "testwinsoft"
}

var sequelize = new Sequelize(env.database, env.user, env.password, {
    host: env.host,
    dialect: 'mysql',
    pool: {
        max: 1000,
        min: 0,
        idle: 10000
    },

});

sequelize.sync();


module.exports = sequelize;
