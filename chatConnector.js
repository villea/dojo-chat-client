  var ChatConnector = function(url,name){
  	var socket = io.connect(url);
  	console.log("logging to chat..");
  	socket.emit("login",name);
  	
  	this.socket = socket;
  };

  ChatConnector.prototype.handleRooms = function(fn){
  	this.socket.on("updateRooms",fn);
  }

  ChatConnector.prototype.handleMessages = function(fn){
  	this.socket.on("updateMessages",fn);
  };

  ChatConnector.prototype.message = function (room,message){
  	this.socket.emit("sendMessage",{
       room : room,
       message : message
  	},function (err){
  		throw err;
  	});
  };

  ChatConnector.prototype.join = function (room){
  	this.socket.emit("join",room);
  }