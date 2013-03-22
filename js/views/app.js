//Filename: boilerplate.js

define([
  // These are path alias that we configured in our bootstrap
  'jquery',     // lib/jquery/jquery
  'underscore', // lib/underscore/underscore
  'Backbone'    // lib/backbone/backbone
], function($, _, Backbone){
  // Above we have passed in jQuery, Underscore and Backbone
  // They will not be accessible in the global scope
  var viewName = Backbone.View.extend({
    initialize: function(){
      alert('view Create');
    }
  });
  return viewName;
  // What we return here will be used by other modules
});