const { Chat } = require('./Chat');
const { User } = require('./User');
const { User_chat } = require('./User_chat');
const { Message } = require('./Message');

// Defining associations between the models

//TODO: Define between user and chat - many to many
//Junction table is user_chat
Chat.belongsToMany(User, { through: 'User_chat' });

//TODO: Define between chat and user - many to many
//Junction table is user_chat
User.belongsToMany(Chat, { through: 'User_chat' });

//TODO: Define between user and message - one to many
User.hasMany(Message, {
  foreignKey: 'sender_id',
  onDelete: 'CASCADE'
});

//TODO: Define between chat and message - one to many
Chat.hasMany(Message, {
  foreignKey: 'chat_id',
  onDelete: 'CASCADE'
});

//TODO: Define between message and chat - one to one
Message.belongsTo(Chat, {
  foreignKey: 'chat_id'
});

//TODO: Define between message and user - one to one
Message.belongsTo(User, {
  foreignKey: 'sender_id'
});

module.exports = {
  Chat,
  User,
  User_chat,
  Message
};
