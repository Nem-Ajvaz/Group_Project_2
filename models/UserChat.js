const { Model, DataTypes } = require('sequelize');

const sequelize = require('../config/connection.js');

class UserChat extends Model {}

UserChat.init(
  //Junction table for the user and chat id since it will be many to many.
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    is_owner: {
      type: DataTypes.BOOLEAN
    }
  },

  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'UserChat'
  }
);

module.exports = { UserChat };
