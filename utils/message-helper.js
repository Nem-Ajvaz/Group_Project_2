const moment = require('moment');

let messageFormat = (username, text) => {
  return {
    user_id, // either user from registration or the socket session
    username, // from sign in
    text, // message content from user
    time: moment().format('h:mm a') // time format
  };
};

module.exports = { messageFormat };
