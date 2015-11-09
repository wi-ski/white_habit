var Users = Backbone.Collection.extend({

  model: User,

  url:"http://localhost:3000/test.json",

  initialize: function() {
    // body...
  }


  
});