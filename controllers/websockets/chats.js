function initChatSocket(socket, io) {
  socket.on('addUser', userdata => {
    console.log(userdata);
    socket.broadcast.emit('userAdded', userdata);
  });

  socket.on('removeUser', userdata => {
    console.log(userdata);
    socket.emit('userRemoved', userdata);
  });

//   socket.on('connection', function(socket) {
//     socket.on('join', function(room) {
//     socket.join(room);
//     console.log(`This ${room} is active`);
// });
// });

//  socket.on('room', res => {
//    console.log (res + 'newRoom');
//  })
 


}

module.exports = { initChatSocket };
