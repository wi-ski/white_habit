var Message_View = Backbone.View.extend({
  template: _.template('<blockquote class="<%= username === window.local ? "blockquote-reverse" : ""  %>">\
                          <p class="messageContent"><%= message %></p>\
                          <footer><%= username || "Uknown" %><cite title="Source Title"></cite></footer>\
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