var MessagesView = Backbone.View.extend({
  el: '#messagesContainer',

  initialize: function() {
    this.listenTo(this.collection,'add',this.render);  
    this.render();
  },

  render: function() {
    // to preserve event handlers on child nodes, we must call .detach() on them before overwriting with .html()
    // see http://api.jquery.com/detach/
    this.$el.children().detach();

    this.$el.append(
      this.collection.map(function(message) {
        // return new Message_View().render();
        return new Message_View({model: message}).render();
      })
    );
  }

});