const socket = io('http://localhost:4001');
const $formElem = $('form');
const $createRoomBtn =  $('#createRoom')
//Referencing elements from the HTML

const $chatRoomList = $('#chatList');



// Validates by the user ID what chags they are associated with
$(document).ready(async () => {
  
  const response = await fetch('/api/existingChatRoom/welcome');
  const existingChatRooms = await response.json();
  // console.log(existingChatRooms);
    for (let i =0; i < existingChatRooms.length; i++ ){
      if(existingChatRooms[0].Chats[0].chat_name){
        // console.log(existingChatRooms);
        const $chatRooms = $('<ul>');
        $chatRooms.text(existingChatRooms[0].Chats[0].chat_name);
        $chatRooms.addClass('btn chats btn-lg btn-block');
        $chatRoomList.append($chatRooms);
      }
    }
  
});
