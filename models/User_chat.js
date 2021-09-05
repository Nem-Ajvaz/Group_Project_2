const { Model, DataTypes } = require('sequelize');

const sequelize = require('../config/connection.js');

class User_chat extends Model {}

User_chat.init(
  //Junction table for the user and chat id since it will be many to many.
  {
    user_id: {
      type: DataTypes.INTEGER,
      references: {
        model: 'user',
        key: 'user_id'
      }
    },
    chat_id: {
      type: DataTypes.INTEGER,
      references: {
        model: 'chat',
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
    modelName: 'USER_CHAT'
  }
);

module.exports = { User_chat };
