const { Model, DataTypes, literal } = require('sequelize');

const sequelize = require('../config/connection.js');

class Message extends Model {}

Message.init(
  //TODO: Define the model for message
  {
    message_id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    message_content: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    chat_id: {
      type: DataTypes.INTEGER,
      references: {
        model: 'CHAT',
        key: 'chat_id'
      }
    },
    sender_id: {
      type: DataTypes.INTEGER,
      references: {
        model: 'USER',
        key: 'user_id'
      }
    },
    created_at: {
      type: 'TIMESTAMP',
      defaultValue: sequelize.literal('CURRENT_TIMESTAMP'),
      allowNull: false
    }
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'MESSAGES'
  }
);

module.exports = { Message };
