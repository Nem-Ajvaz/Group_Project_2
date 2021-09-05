const { Model, DataTypes } = require('sequelize');

const sequelize = require('../config/connection.js');

class User extends Model {}

User.init(
  //TODO: Define the model for users
  {
    user_id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true
    },
    display_name: {
      type: DataTypes.STRING(30),
      allowNull: false,
      unique: true
    },
    email: {
      type: DataTypes.STRING(255),
      allowNull: false,
      unique: true
    },
    pass_word: {
      type: DataTypes.STRING(255),
      allowNull: false
    }
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'USERS'
  }
);

module.exports = { User };
