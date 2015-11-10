var privateKey = require("./privateKey.js");
var publicKey = require("./publicKey.js");
var crypto = require('./jsencrypt.js');
var shaGen = require("./sha256.js");



qq = new crypto();
module.exports.sign = function(UsersPublicKey){
  var key = new NodeRSA(privateKey,'private');
  var hashedKey = shaGen.hash(UsersPublicKey);
  var encryptedHashedKey = key.encrypt(hashedKey,'base64');
  return {PublicKey:UsersPublicKey,Signature:encryptedHashedKey}
}


// module.exports.sign = function(UsersPublicKey){
//   var key = new NodeRSA(privateKey,'private');
//   var hashedKey = shaGen.hash(UsersPublicKey);
//   var encryptedHashedKey = key.encrypt(hashedKey,'base64');
//   return {PublicKey:UsersPublicKey,Signature:encryptedHashedKey}
// }

