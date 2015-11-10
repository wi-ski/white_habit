var privateKey = require("./privateKey.js");
var publicKey = require("./publicKey.js");
var crypto = require('./jsencrypt.js');
var shaGen = require("./sha256.js");

zz=new crypto();
qq = new crypto();
// var publicKey=qq.getPublicKey();
// var privateKey = qq.getPrivateKey();


var test="FooFoo";


qq.setPublicKey(publicKey);

var enqMessage = qq.encrypt(test);
console.log("qqqqqqqq",enqMessage)



zz.setPrivateKey(privateKey)
var answer = zz.decrypt(enqMessage)
console.log("HOPE SHE BE FOO: ",answer)




















// zz=new crypto();
// qq = new crypto();
// // var publicKey=qq.getPublicKey();
// // var privateKey = qq.getPrivateKey();


// var test="FooFoo";


// qq.setPublicKey(publicKey);

// var enqMessage = qq.encrypt(test);
// console.log("qqqqqqqq",enqMessage)



// zz.setPrivateKey(privateKey)
// var answer = zz.decrypt(enqMessage)
// console.log("HOPE SHE BE FOO: ",answer)


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

