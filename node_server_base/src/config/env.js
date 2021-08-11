const { Sequelize } = require('sequelize');


var env = {
    host: process.env.DB_HOST ,
    user: process.env.DB_USER ,
    password: process.env.DB_PASSWORD ,
    database: process.env.DB_NAME,
    
}

var sequelize = new Sequelize(env.database, env.user, env.password, {
    host: env.host,
    dialect: 'mysql',
    port: +process.env.DB_PORT || 3306
});

sequelize.sync();


module.exports = sequelize;
