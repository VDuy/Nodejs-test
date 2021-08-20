const { Sequelize } = require('sequelize');
const { debug } = require('../utils/constant')

const env = {
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
    port: process.env.DB_PORT,
}
const sequelize = new Sequelize(env.database, env.user, env.password, {
    host: env.host,
    port: env.port,
    dialect: 'mysql',
    logging: debug.db,
    
});

sequelize.sync();


module.exports = sequelize;
