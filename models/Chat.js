const { Model, DataTypes } = require('sequelize');

const sequelize = require('../config/connection.js');

class Chat extends Model {}

Chat.init(
  //TODO: Define the model for chats
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    chat_name: {
      type: DataTypes.STRING(255),
      unique: true
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
