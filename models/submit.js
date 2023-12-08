const Sequelize = require('sequelize');

const sequelize = require('../util/database');

const submit = sequelize.define('blogdata',
{
    id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        // defaultValue: 0 // Set a default value or use autoIncrement
      },
      title : Sequelize.STRING,
      author:Sequelize.STRING,
      content: Sequelize.TEXT

})
module.exports = submit;