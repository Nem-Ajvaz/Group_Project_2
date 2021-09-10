const socket = io('http://localhost:4001');
const $formElem = $('form');
const $createRoomBtn = $('#createRoom');
//Referencing elements from the HTML

const $chatRoomList = $('#chatList');

// Validates by the user ID what chags they are associated with
$(document).ready(async () => {
  const response = await fetch('/api/existingChatRoom/welcome');
  const renderChatRooms = await response.json();
  // console.log(renderChatRooms);
  const $chatRooms = $('<ul>');
  $chatRooms.attr('id', 'roomList');
  $chatRoomList.append($chatRooms);
  for (let i = 0; i < renderChatRooms[0].Chats.length; i++) {
    if (renderChatRooms[0].Chats[i].chat_name) {
      const $chatRoomItems = $('<li>');
      $chatRoomItems.attr('id', renderChatRooms[0].Chats[i].chat_name);
      $chatRoomItems.attr('onclick', 'getId(this)');
      $chatRoomItems.text(renderChatRooms[0].Chats[i].chat_name);
      $chatRoomItems.addClass('btn chats btn-lg btn-block');

      $chatRooms.append($chatRoomItems);
    }
  }
});
