var privateKey = require("./privateKey.js");
var publicKey = require("./publicKey.js");
var crypto = require('./jsencrypt.js');
var rsaSign = require('jsrsasign');








// module.exports.sign = function(UsersPublicKey) {
//   var rsa = new RSAKey();
//   rsa.readPrivateKeyFromPEMString(publicKey);
//   var hashAlg = 'SHA256'
//   var hSig = rsa.signString(UsersPublicKey, hashAlg);
//   var signed = linebrk(hSig, 64);
//   console.log(signed);


//   return {PublicKey:UsersPublicKey,Signature:signed}
// }


// module.exports.sign = function(UsersPublicKey){
//   var key = new NodeRSA(privateKey,'private');
//   var hashedKey = shaGen.hash(UsersPublicKey);
//   var encryptedHashedKey = key.encrypt(hashedKey,'base64');
//   return {PublicKey:UsersPublicKey,Signature:encryptedHashedKey}
// }














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




// module.exports.sign = function(UsersPublicKey){
//   var key = new NodeRSA(privateKey,'private');
//   var hashedKey = shaGen.hash(UsersPublicKey);
//   var encryptedHashedKey = key.encrypt(hashedKey,'base64');
//   return {PublicKey:UsersPublicKey,Signature:encryptedHashedKey}
// }




// function linebrk(c,d){var a="";var b=0;while(b+d<c.length){a+=c.substring(b,b+d)+"\n";b+=d}return a+c.substring(b,c.length)}


// var testPubKey = ['-----BEGIN PUBLIC KEY-----',
// 'MIGfMA0GCSqGSIb3DQEBAQUAA4GNADCBiQKBgQCl7q940J629rVenqG5J+0Z6KKw',
// 'KE8MVwkf88lF4bUaV8Ma543nf9jv7TcOCuZBSZL31EXrp3NKke2N3CsMOc/tGqkx',
// 'r+A77ssJKzf9eBLwGUynVeJoAQ8s75XDHmreODikvnI6pzcAfsu/sSP01781lCuw',
// 'eGoW+uM3TRZw6sh+iwIDAQAB',
// '-----END PUBLIC KEY-----'].join('\n').trim();


// var test = rsaSign.KEYUTIL



// sign = function(UsersPublicKey) {
//   var rsa = new rsaSign.RSAKey();

//   rsa.readPrivateKeyFromPEMString(privateKey); //sign with private key of server
//   var hashAlg = 'sha256';
//   var hSig = rsa.signString(testPubKey, hashAlg);
//   var signed = linebrk(hSig, 64);
//   return signed;
// }

// testSignedKey = sign(testPubKey);




// function doVerify() {
//   var sMsg = testPubKey;
//   var hSig = testSignedKey;

//   console.log('TEST USERS PUB KEY',sMsg)
//   console.log('TEST SIGNED PUB KEY',hSig)

//   var x509 = new rsaSign.X509();

//   x509.readCertPEM(publicKey); //decrypt with public key of server

//   console.log(x509.subjectPublicKeyRSA.verifyString.length)

//   var isValid = x509.subjectPublicKeyRSA.verifyString(sMsg, hSig);
//   return isValid;
// }












