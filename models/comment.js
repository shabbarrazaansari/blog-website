const Sequelize = require('sequelize');
const sequelize = require('../util/database');

const comment = sequelize.define('comment',


{
    id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        // defaultValue: 0 // Set a default value or use autoIncrement
      },
    comment : Sequelize.TEXT
})

module.exports = comment;

