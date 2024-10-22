//node.js via socket.io
const socket = io('https://fang-over-fang.onrender.com');
socket.emit('message', 'Test test test...')

//adding message to chat
function addMessageToChat(message) {
  const messageBoard = document.getElementById('message-board');
  //new div element for messages
  const newMessage = document.createElement('div');
  newMessage.classList.add('message');//css message method
  newMessage.textContent = message;
  //add new message to message board
  messageBoard.appendChild(newMessage);
  
    messageBoard.scrollTop = messageBoard.scrollHeight; //autoscroll to bottom of chat
    
  //read messages from server to show in message board
  socket.on('message', (msg) => {
    document.getElementById('messages').innerHTML += `<p>${msg}</p>`
  });
  
  //sending message -> event button
  document.getElementById('publish-button').addEventListener('click', () => {
    const messageInput = document.getElementById('message-input');
    const message = messageInput.value.trim();
      
      if (message) {
        socket.emit('message', message); //send to server
        messageInput.value = ''; //clear input field
      }
  });
    
}