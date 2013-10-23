  var ChatConnector = function(url){
  	var socket = io.connect(url);
  	this.socket = socket;
  };

  ChatConnector.prototype.login = function (name){
   this.socket.emit("login",name,function (err){
      throw err;
   });
  }

  ChatConnector.prototype.handleAllRooms = function(fn){
  	this.socket.on("updateAllRooms",fn);
  };

  ChatConnector.prototype.handleJoinedRooms = function(fn){
    this.socket.on("updateJoinedRooms",fn);
  };

  ChatConnector.prototype.handleReceiveMessage = function(fn){
  	this.socket.on("receiveMessage",fn);
  };

  ChatConnector.prototype.handleUsersInRoom = function(fn){
    this.socket.on("updateUsersInRoom",fn);
  };

  ChatConnector.prototype.sendMessage = function (room,message){
  	this.socket.emit("sendMessage",{
       room : room,
       message : message
  	},function (err){
  		throw err;
  	});
  };

  ChatConnector.prototype.joinRoom = function (room){
  	this.socket.emit("joinRoom",room,function (err){
      throw err;
    });
  };

  ChatConnector.prototype.leaveRoom = function (room){
    this.socket.emit("leaveRoom",room,function (err){
      throw err;
    });
  };

  ChatConnector.prototype.getAllRooms = function (handler){
    if (!handler){
      throw "Handler function is required";
    }
    this.socket.emit("getAllRooms",handler);
  };

  ChatConnector.prototype.getUsersInRoom = function (room,handler){
    if (!handler || !room){
      throw "Room and handler function is required";
    }
    this.socket.emit("getUsersInRoom",room,handler);
  };


