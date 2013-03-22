require.config({
    shim:{
        Backbone:{
            deps:['underscore', 'jquery'],
            exports:'Backbone'
        },
        underscore:{
            exports:'_'
        }
    },
    paths:{
        // RequireJS plugin
        text:'libs/require/text',
        // RequireJS plugin
        domReady:'libs/require/domReady',
        // underscore library
        underscore:'libs/underscore/underscore',
        // Backbone.js library
        Backbone:'libs/backbone/backbone',
        // jQuery
        jquery:'libs/jquery/jquery-1.8.2',
        //FastClick
        fastClick:'libs/fastClick/fastclick'
    }
    
});

require([
  "domReady",
  "views/app"
  // Load our app module and pass it to our definition function
], function(domReady, viewName){
  domReady(function() {
    function onDeviceReady() {
      new viewName();    
    }
    document.addEventListener('deviceready', onDeviceReady, false);
  });
});