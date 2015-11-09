var Message = Backbone.Model.extend({

  defaults: {
    user:{name:undefined,publicKey:"Uknown"},
    message: "No provided Message"
  },

  initialize: function() {
    console.log("NEW MESSAGE INSTANTIATED!!!!")
  },
  
});