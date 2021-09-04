const moment =require('moment'); 

let messageFormat = (username, text) => {
    return {
        username,
        text,
        time: moment().format('h:mm a')
    };
};

module.exports = messageFormat;

