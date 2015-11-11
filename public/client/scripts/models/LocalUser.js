var LocalUser = Backbone.Model.extend({

  defaults: {
    username: "No username provided | Anonymous",
    publicKey: "No Public Key Provided",
    privateKey: "No Private Key Provided",
    socketId:"no id provided",
    session:false
  },

  initialize: function() {
    console.log("New local user succesfully instantiated",this)
  },
  
});