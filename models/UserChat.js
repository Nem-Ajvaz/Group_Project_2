const { Model, DataTypes } = require('sequelize');

const sequelize = require('../config/connection.js');

class UserChat extends Model {}

UserChat.init(
  //Junction table for the user and chat id since it will be many to many.
  {
    user_id: {
      type: DataTypes.INTEGER,
      references: {
        model: 'USER',
        key: 'user_id'
      }
    },
    chat_id: {
      type: DataTypes.INTEGER,
      references: {
        model: 'CHAT',
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
    modelName: 'USERCHAT'
  }
);

module.exports = { UserChat };
