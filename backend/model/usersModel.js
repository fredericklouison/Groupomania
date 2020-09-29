const { Sequelize } = require('sequelize');
const sequelize=require('../db')

const User= sequelize.define('User',{
    email:{
        type: Sequelize.STRING,
        unique:true,
        allowNull:false
    },
    password: {
        type: Sequelize.STRING
    },
    pseudo:{
        type: Sequelize.STRING
    },
    nom:{
        type: Sequelize.STRING
    },
    prenom:{
        type: Sequelize.STRING
    },
    IsAdmin:{
        type: Sequelize.BOOLEAN
    }
  })
  module.exports=User