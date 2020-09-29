const { Sequelize } = require('sequelize');
const sequelize=require('../db')

const Post= sequelize.define('Post',{
    photo:{
        type: Sequelize.STRING,
        allowNull:false
    },
    titre:{
        type: Sequelize.STRING
    },
    userid:{
        type: Sequelize.INTEGER,
        allowNull:false
    },
    photo_user:{
        type: Sequelize.STRING
    },
    pseudo:{
        type: Sequelize.STRING
    }

  })
  module.exports=Post