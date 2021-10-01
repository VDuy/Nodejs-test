// import express from "express"
const { Sequelize } = require('sequelize');
const { debug } = require('../utils/constant')
// const CONSTANT = require("../utils/constant");

const env = {
    username: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
    host: process.env.DB_HOST,
    port: process.env.DB_PORT,
}

const sequelize = new Sequelize(
    env.database,
    env.username,
    env.password,
    {
        host: env.host,
        port: env.port,
        dialect: 'mysql',
        logging: debug.db,
        loggingl: false,
        query: { raw: false },
        define: {
            hooks: true
        }
    });

sequelize.sync();


module.exports = sequelize;
