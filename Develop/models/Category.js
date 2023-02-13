const { Model, DataTypes } = require('sequelize');

const sequelize = require('../config/connection.js');

class Category extends Model {}

Category.init(
  {
    id:{
      type: DataTypes.INTEGER, //will be a integer
      allownull: false, // doesnt allow null values 
      primaryKey: true, // setting the primary key
      autoIncrement: true, // Auto-increment allows a unique number to be generated

    },
    category_name: {
      type: DataTypes.STRING,
      allownull: false
    },
  },

  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'category',
  }
);

module.exports = Category;
