var CertificateView = Backbone.View.extend({
  
  // model:Certificate,

  el:"#certDisplay",

  template: _.template('<p><%= PublicKey %> || <%= Signature %></p>'),

  initialize: function() {
    this.render();
  },

  render: function() {
    // this.$el.children().destroy();
    // this.$el.children().detach();

    this.$el.append(this.$el.html(this.template(this.model.attributes)));
  }

});