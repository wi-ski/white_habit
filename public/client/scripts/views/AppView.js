var AppView = Backbone.View.extend({
  el: '#app',

  initialize: function(params) {
    this.socket = params.socket
    this.newMessagesView = new MessagesView({collection:this.model.get('MessagesCollection')});
    this.newUsersView = new UsersView({collection:this.model.get('UsersCollection')});
    this.newUsersView.on('requestSession',this.requestSession,this)
  },
  requestSession:function(params){
    console.log("Session Requested",params)
    var encrypt =  new JSEncrypt();
    encrypt.setPublicKey(params.pubKey);
    params.pubKey = encrypt.encrypt("TESTPASSWORD") //encrypts local users pubKey with other users pubkey
    this.socket.emit("requestSession",params);
    window.pendingSymmPassword = "TESTPASSWORD"
  },


  render: function() {

  }

});

