function roomsCollection(obj){
  this.numRooms=0;
  this.storage = {};
  this.push = function(obj){
    if(!obj.name || !obj.owner){
      return { err:"Malformed user object missing: " + (obj.name ? "Owner" : "Room Name") }
    }
    numUsers++;
    if(this.storage[obj.name]){
      return {err: "Room already exists with that name..."}
    }else{
      this.storage[obj.name] = obj;
      return {success: "Room succesfully created"}
    }
  }
  this.remove = function(obj){
    this.numUsers--;
    delete this.storage[obj.username]
  }
}

module.exports = roomsCollection;