var MessagesView = Backbone.View.extend({
  el: '#messagesContainer',

  initialize: function() {
    // this.set('messages', new messagesView({collection: Messages}));
    // this.render();
  },

  render: function() {
    // to preserve event handlers on child nodes, we must call .detach() on them before overwriting with .html()
    // see http://api.jquery.com/detach/
    this.$el.children().detach();

    this.$el.append(
      this.collection.map(function(song) {
        return new LibraryEntryView({model: song}).render();
      })
    );
  }

});