const users = [];

//When a user joining a chat 

let userJoin = (id, username, room) => {
    const user = { id, username, room };
    users.push(user);

    return user;
};

// Getting the current user by id

let getCurrentUser = (id) => {

    return users.find(user => user.id === id);

};

// when user leaves a chat remove user

let userLeave = (id) => {
    const userIndex = users.findIndex(user => user.id === id);

    if (userIndex !== -1) {
        return users.splice(index,1)[0];
    }
};

// get list of users of chat room

let getRoomUsers = (room) => {
    return users.filter(user => user.room === room);
    
};

module.exports = { userJoin, getCurrentUser, userLeave, getRoomUser};