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
        model: 'Chat',
        key: 'chat_id'
      }
    },
    sender_id: {
      type: DataTypes.INTEGER,
      references: {
        model: 'User',
        key: 'user_id'
      }
    }
    // created_at: {
    //   type: 'TIMESTAMP',
    //   defaultValue: literal('CURRENT_TIMESTAMP'),
    //   allowNull: false
    // }
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'Message'
  }
);

module.exports = { Message };
