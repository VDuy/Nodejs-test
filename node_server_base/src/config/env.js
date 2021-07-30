const { Sequelize } = require('sequelize');


var env = {
    host: process.env.DB_HOST || '127.0.0.1',
    user: process.env.DB_USER || 'roots',
    password: process.env.DB_PASSWORD || '0983947663A',
    database: process.env.DB_NAME || 'testwindsoft',
    
}

var sequelize = new Sequelize(env.database, env.user, env.password, {
    host: env.host,
    dialect: 'mysql',
    port: +process.env.DB_PORT || 3306
});

sequelize.sync();


module.exports = sequelize;
