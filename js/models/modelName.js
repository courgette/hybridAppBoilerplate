//Filename: boilerplate.js

define([
  // These are path alias that we configured in our bootstrap
  'underscore', // lib/underscore/underscore
  'Backbone'    // lib/backbone/backbone
], function(_, Backbone){
  var ModelName = Backbone.Model.extend();
  return ModelName;
});