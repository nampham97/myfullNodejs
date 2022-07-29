const { Sequelize } = require('sequelize');

const sequelize = new Sequelize('database', 'username', 'password', {
    host: 'sql6.freemysqlhosting.net',
    dialect: 'mysql'
  });