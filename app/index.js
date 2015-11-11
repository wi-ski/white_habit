
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
app.use('/client',express.static(__dirname+'/../public/client/'));

app.get('/', function (req, res) {
  res.sendFile(path.resolve(__dirname + '/../public/client/index.html'));
});

  var usersCollection = new usersCollection(); // might not use
  var roomsCollection = new roomsCollection();

io.sockets.on('connection', function (socket) {

  socket.on('signMyKey',function(publicKey){

    var certificate = certificateSigner.sign(publicKey);
    socket.emit("receieveCertificate",certificate);

  });
  socket.on('send',function(messageObj){
    console.log("SEND TRIGGED",messageObj)
    io.sockets.emit('message', messageObj);

  })
  socket.on("acceptSession",function(acceptObj){
    var emSocket = usersCollection.storage[acceptObj.username].socket
    emSocket.emit("SessionAccept",acceptObj)

  });
  
  socket.on('requestSession',function(userAttrObj){

    console.log("REQUEST SESSION TRIGGED",userAttrObj);

    var emSocket = usersCollection.storage[userAttrObj.username].socket
    emSocket.emit("incomingSessionReq",userAttrObj)
  });

  socket.on('requestUsers',function(){
    var testUsersCollection = [];
    var storage = usersCollection.storage;
    for(var key in storage){
      testUsersCollection.push({username:key,publicKey:storage[key].publicKey})
    }
    socket.emit("receiveUsers",testUsersCollection);
  });

  socket.on('newMessage',function(messageObj){
    var testMessage = {destination_user:'billy',message:"This is a test message"}
    var dest_socket = usersCollection.storage[messageObj.destination_user].socket;
    if(!dest_socket){
      socket.emit({error:"User doesnt exist"});
    }else{
      dest_socket.emit("recieveMessage",messageObj);
    }
  });

  socket.on('genNewUser', function(userObj){
    console.log("GEN USER FIRED : ",userObj)
    socket.username = userObj.username;
    if(usersCollection.storage[userObj.username]){
      socket.emit({err:"Username taken"})
    }else{ //everything be so ghetto.
      usersCollection.storage[userObj.username]={};
      usersCollection.storage[userObj.username].publicKey=userObj.publicKey;
      usersCollection.storage[userObj.username].socket=socket;
      socket.emit("userCreateSuccess",userObj);
      socket.broadcast.emit("newUserAdded",userObj);
    }
  });

  socket.on('disconnect', function(){
    console.log("DISCONNECT FIRED",socket.username)
    delete usersCollection.storage[socket.username];
    console.log(usersCollection.storage)
    socket.broadcast.emit('userDisconnect',socket.username);

  });
})


console.log("Server listening at port: ",settings.port," Probably localhost...")













