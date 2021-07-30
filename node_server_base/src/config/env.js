const { Sequelize } = require('sequelize');


var env = {
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME
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
