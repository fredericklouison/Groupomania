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
    },
    pseudo:{
        type: Sequelize.STRING
    },

  })
  module.exports=Comment