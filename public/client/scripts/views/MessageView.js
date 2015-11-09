var MessageView = Backbone.View.extend({
  el: '#app',


  template: _.template('<blockquote>\
                          <p class="messageContent"><%= message %></p>\
                          <footer><%= user.name || "Uknown" %><cite title="Source Title"><%= user.username || user.publicKey %></cite></footer>\
                        </blockquote>'
                        ),

  initialize: function() {
    // this.set('messages', new messagesView({collection: Messages}));
    // this.render();
  },

  render: function(){
    return this.$el.html(this.template(this.model.attributes));
  }
});