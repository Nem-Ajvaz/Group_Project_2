const { Chat } = require('./Chat');
const { User } = require('./User');
const { UserChat } = require('./UserChat');
const { Message } = require('./Message');

// Defining associations between the models

//TODO: Define between user and chat - many to many
//Junction table is user_chat
User.belongsToMany(Chat, { through: 'UserChat' });
Chat.belongsToMany(User, {through: 'UserChat'})

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
  UserChat,
  Message
};
