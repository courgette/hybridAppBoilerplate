define([
  // These are path alias that we configured in our bootstrap
  'jquery',     // lib/jquery/jquery
  'underscore', // lib/underscore/underscore
  'Backbone',   // lib/backbone/backbone
  'models/modelName'
], function($, _, Backbone){
    var collectName = Backbone.Collection.extend({
      model: modelName
    });
    return collectName;
});