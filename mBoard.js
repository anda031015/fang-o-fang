//node.js via socket.io
const socket = io('https://fang-over-fang.onrender.com');

//adding message to chat
function addMessageToChat(username, message) {
  const messageBoard = document.getElementById('message-board');
  const newMessage = document.createElement('div');
  newMessage.textContent = `${username}: ${message}`;
  
  messageBoard.appendChild(newMessage);
    messageBoard.scrollTop = messageBoard.scrollHeight; //autoscroll to bottom of chat
    
  //read messages from server to show in message board
  socket.on('message', (msg) => {
    addMessageToChat('User', msg.content);
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
