const Sequelize = require('sequelize');



const db = require('../database/db');

const product = db.define('user',{
    id:{
        type:Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    name :{
        type:Sequelize.TEXT,
        allowNull:false
    },
    description:{
        type:Sequelize.TEXT,
        allowNull:false
    },
    categoryid:{
        type:Sequelize.INTEGER,
        allowNull:false
    }
});

module.exports = product;