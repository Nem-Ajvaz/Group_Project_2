const text = $("#message-input")
const send = $('#send')

send.on('click', function(e) {
    console.log(e.this.value)
})

console.log(text)



// btn.on("click", () => {
//     console.log("test")
// })

/* const btn = document.getElementById('#message-input').va; */
// const chatForm = document.getElementById('chat-form');
// chatForm.addEventListener("submit", (e) => {
//     e.preventDefault();
//     const msg = e.target.elements.message-input.value;

//     console.log(msg)
// })

// const message = document.getElementById('#message-input');

// //console.log("This better BLEEEPING work")

// document.getElementById('send').addEventListener("click", () => {
    // console.log(message)
// });

// // document.getElementById('send').addEventListener("click", () => {
//     console.log(messageInput)
// })

// const message = $("#message-input").val("text content");

// console.log(message);



// // function displayMessage(event) {
// //     event.preventDefault();
    
// //    /*  let message = event;
// //     console.log(message) */

// //     var ownerMessage = messageInput.value;

// //     document.querySelector('btn').on('click', function (e) {
// //         localStorage.setItem(ownerMessage)
// //     }) 

// //     for (var i=0; i<ownerMessage; i++) {
// //         $('#messages').append(`<p class="owner-message">${ownerMessage}<p>`)
// //     }
// // }

// // displayMessage();

// // /* document.getElementById('#send').addEventListener("submit", (e) => {
// //     e.preventDefault();
    
// //     let message = e.target;
// //     console.log(message)
// // }) */


// // document.getElementById('#message-input').addEventListener('submit', function (e) {
// //     console.log(e)
// // }) 

// /* todoForm.addEventListener("submit", function(event) {
//     event.preventDefault();
//     console.log('ajkwgeakwgek')
// }) */