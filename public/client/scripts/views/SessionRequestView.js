var LocalUserView = Backbone.View.extend({
  el:"#localUserView",

  template: _.template('<p><%= username %> || <%= publicKey %></p>'),

  initialize: function() {
    // this.set('messages', new messagesView({collection: Messages}));
    this.render();
  },

  render: function() {
    this.$el.children().detach();
    this.$el.append(this.template(this.model.attributes));
  }

});