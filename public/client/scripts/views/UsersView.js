
var UsersView = Backbone.View.extend({
  el: '.usersView',

  initialize: function() {
    this.listenTo( this.collection, 'add', this.render);
    this.listenTo( this.collection, 'remove', this.render);
    this.render();
  },

  events: {
      "click li": "clicked"
  },
  
  clicked: function(e){
      e.preventDefault();
      var pubKey = $(e.currentTarget).data("pkey");
      var uname = $(e.currentTarget).data("uname");
      this.trigger("requestSession",{username:uname,pubKey:pubKey})
  },

  render: function() {
    this.$el.children().detach();

    this.$el.append(
      this.collection.map(function(user) {
        return new UserView({model: user}).render();
      })
    );
  }

});