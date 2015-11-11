var UserView = Backbone.View.extend({
  template: _.template('<li class="list-group-item" data-uname="<%= username %>" data-pKey="<%= publicKey %>"> \
                          <span class="label label-<%= (session) ? "success":"default" %> label-as-badge"><%= (session) ? "Session":"No Session" %></span> \
                            <%= username %> \
                        </li>'
                      ),
  events:{
    "click span": this.test
  },

  test: function() {
    this.model.initCommSession();
  },


  initialize: function() {

  },

  expand: function(){


  },

  render: function() {
    return this.template(this.model.attributes);
  }

});


