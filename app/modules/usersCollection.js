function usersCollection(){
  this.numUsers=0;
  this.storage = {};
  this.push = function(obj){
    if(!obj.username || !obj.publicKey){
      return { err:"Malformed user object missing: " + (obj.username ? "Public Key" : "Username") }
    }
    numUsers++;
    if(this.storage[obj.username]){
      return {err: "User already exists with that username..."}
    }else{
      this.storage[obj.username] = obj;
      return {success: "User succesfully created"}
    }
  }
  this.remove = function(obj){
    this.numUsers--;
    delete this.storage[obj.username]
  }
}

module.exports = usersCollection;