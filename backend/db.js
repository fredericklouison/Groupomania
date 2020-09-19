const { Sequelize } = require('sequelize');

  const sequelize = new Sequelize("Groupomania", "root", "root", { dialect: "mysql",  host: "localhost" });
 
 module.exports= sequelize

