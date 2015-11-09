var PublicKeys = Backbone.Collection.extend({

  model: PublicKey,

  url:"http://localhost:3000/test.json",

  initialize: function() {
    // body...
  }


  
});