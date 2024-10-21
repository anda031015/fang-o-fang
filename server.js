//import module for backend node.js handling
const express = require('express');
const http = require('http');
const { Server } = require('socket.io');

//create express 
const app = express();
const server = http.createServer(app);
const io = new Server(server);

//websocket connections
io.on('connection', (socket) => {
  console.log('New soul has entered The Wire:', socket.id);
  //listen for new messages
  socket.on('message', (msg) => {
    console.log('Processing response:', msg);
    io.emit('message', msg); //broadcast messages to those connected
  });
  
  //user disconnection
  socket.on('disconnect', () => {
    console.log('Soul has left The Wire', socket.id);
  });
});

//start on port 3000 (access chat at http://localhost:3000)
const PORT = process.env.PORT || 3000; //process.env.PORT ensures that server can start on whatever port Render uses
server.listen(PORT, () => {
    console.log(`On the ${PORT}th of hell`);
  });
  
