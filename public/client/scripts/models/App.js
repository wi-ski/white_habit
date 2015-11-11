var AppModel = Backbone.Model.extend({
  


  initialize: function(params) {
    // this.set("library", new Songs());
    // var MessagesCollection = new Messages();
    // var newMessagesView = new MessagesView({collection:MessagesCollection});
    this.set('MessagesCollection', new Messages());
    this.set('UsersCollection', new Users());
  }

});