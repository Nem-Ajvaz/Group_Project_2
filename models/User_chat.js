const { Model, DataTypes } = require('sequelize');

const sequelize = require('../config/connection.js');

class User_chat extends Model {}

User_chat.init(
  //Junction table for the user and chat id since it will be many to many.
  {
    user_chat_id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    user_id: {
      type: DataTypes.INTEGER,
      references: {
        model: 'User',
        key: 'user_id'
      }
    },
    chat_id: {
      type: DataTypes.INTEGER,
      references: {
        model: 'Chat',
        key: 'chat_id'
      }
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
    modelname: 'User_chat'
  }
);

module.exports = { User_chat };
