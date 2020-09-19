const { Sequelize } = require('sequelize');
const sequelize=require('../db')

const Post= sequelize.define('Post',{
    Photo:{
        type: Sequelize.STRING,
        allowNull:false
    },
    Dislikes:{
        type: Sequelize.INTEGER
    },
    likes:{
        type: Sequelize.INTEGER
    },
    userid:{
        type: Sequelize.INTEGER,
        allowNull:false
    }

  })
  module.exports=Post