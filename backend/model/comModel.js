const { Sequelize } = require('sequelize');
const sequelize=require('../db')

const Comment= sequelize.define('Comment',{
    text:{
        type: Sequelize.STRING,
        allowNull:false
    },
    postid:{
        type: Sequelize.INTEGER
    },
    userid:{
        type: Sequelize.INTEGER,
        allowNull:false
    }

  })
  module.exports=Comment