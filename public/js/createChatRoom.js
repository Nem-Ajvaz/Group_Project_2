// const $createRoom =  $('#create-chat')

// $createRoom.on('submit', async (e)=>{
//     e.preventDefault()
//     const response = await fetch('/api/createChatRoom/welcome');
//     const existingChatRooms = await response.json();

//     if (!existingChatRooms){
//         console.log("this doesn't  exist")
//       } else {
//         for (let i =0; i < existingChatRooms.length; i++ ){
//           if (existingChatRooms[i]){
//             const $chatRooms = $('<ul>');
//             $chatRooms.text(existingChatRooms[i].chat_name);
//             $chatRooms.addClass('btn chats btn-lg btn-block');
//             $chatRoomList.append($chatRooms);
//           }
//         }
//       }
    
//   });
  