  var ChatConnector = function(url){
  	var socket = io.connect(url);
  	this.socket = socket;
  };

  ChatConnector.prototype.login = function (name){
   this.socket.emit("login",name,function (err){
      throw err;
   });
  }

  ChatConnector.prototype.handleRooms = function(fn){
  	this.socket.on("updateRooms",fn);
  };

  ChatConnector.prototype.handleUserRooms = function(fn){
    this.socket.on("updateUserRooms",fn);
  };

  ChatConnector.prototype.handleMessages = function(fn){
  	this.socket.on("updateMessages",fn);
  };

  ChatConnector.prototype.handleRoomUsers= function(fn){
    this.socket.on("updateUsersInRoom",fn);
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
  	this.socket.emit("join",room,function (err){
      throw err;
    });
  };

