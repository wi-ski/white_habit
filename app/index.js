
var http = require('http');
var path = require('path');
var express = require('express');
var io = require('socket.io')
var usersCollection = require("./modules/usersCollection.js");
var roomsCollection = require("./modules/roomsCollection.js");
var certificateSigner = require("./modules/certSign.js");

var app = express();
var server = http.createServer(app);
io = io.listen(server);

  
var settings = {

  port:8080,
  address:"127.0.0.0"

}

server.listen(settings.port);  

app.use('/lib',express.static(__dirname+'/../public/bower_components/'));
app.use('/client',express.static(__dirname+'/../public/client/scripts/'));

app.get('/', function (req, res) {
  res.sendFile(path.resolve(__dirname + '/../public/client/index.html'));
});


  // users which are currently connected to the chat
  var users = new usersCollection();

  // rooms which are currently available in chat
  var rooms = new roomsCollection();
  // var rooms = ['room1','room2','room3'];

io.sockets.on('connection', function (socket) {


  socket.on('signMyKey',function(publicKey){

    var certificate = certificateSigner.sign(publicKey);
    socket.emit("receieveCertificate",certificate);

  });


  // when the client emits 'adduser', this listens and executes
  socket.on('adduser', function(user){
    // store the username in the socket session for this client
    socket.username = user.username;
    // store the room name in the socket session for this client
    socket.room = 'room1';
    // add the client's username to the global list
    users[user.username] = {username:user.name};
    // send client to room 1
    socket.join('room1');
    // echo to client they've connected
    socket.emit('updatechat', 'SERVER', 'you have connected to room1');
    // echo to room 1 that a person has connected to their room
    socket.broadcast.to('room1').emit('updatechat', 'SERVER', user.username + ' has connected to this room');
    socket.emit('updaterooms', rooms, 'room1');
  });

  // when the client emits 'sendchat', this listens and executes
  socket.on('sendchat', function (data) {
    // we tell the client to execute 'updatechat' with 2 parameters
    io.sockets.in(socket.room).emit('updatechat', socket.username, data);
  });

  socket.on('switchRoom', function(newroom){
    // leave the current room (stored in session)
    socket.leave(socket.room);
    // join new room, received as function parameter
    socket.join(newroom);
    socket.emit('updatechat', 'SERVER', 'you have connected to '+ newroom);
    // sent message to OLD room
    socket.broadcast.to(socket.room).emit('updatechat', 'SERVER', socket.username+' has left this room');
    // update socket session room title
    socket.room = newroom;
    socket.broadcast.to(newroom).emit('updatechat', 'SERVER', socket.username+' has joined this room');
    socket.emit('updaterooms', rooms, newroom);
  });

  // when the user disconnects.. perform this
  socket.on('disconnect', function(){
    // remove the username from global users list
    delete users[socket.username];
    // update list of users in chat, client-side
    io.sockets.emit('updateusers', users);
    // echo globally that this client has left
    socket.broadcast.emit('updatechat', 'SERVER', socket.username + ' has disconnected');
    socket.leave(socket.room);
  });
})


console.log("Server listening at port: ",settings.port," Probably localhost...")













