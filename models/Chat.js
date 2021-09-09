const { Model, DataTypes } = require('sequelize');

const sequelize = require('../config/connection.js');

class Chat extends Model {}

Chat.init(
  //TODO: Define the model for chats
  {
    chat_id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true
    },
    chat_name: {
      type: DataTypes.STRING(255),
      unique: true,
      allowNull: false
    }
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'Chat'
  }
);

module.exports = { Chat };
