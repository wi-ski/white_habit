var Message = Backbone.Model.extend({

  defaults: {
    destination_socketid:"uknown socketid",
    username:"Unknown Username...this is wierd..",
    message: "No provided Message"
  },

  initialize: function() {
    console.log("NEW MESSAGE INSTANTIATED!!!!")
  },
  
});