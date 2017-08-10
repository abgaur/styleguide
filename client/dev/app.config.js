;(function(ng) {
  "use strict";

  ng.module("styleguide")
    .config([
      "$locationProvider",
      function($locationProvider) {
        
        $locationProvider
          .html5Mode(true)
          .hashPrefix('*');
        
      }
    ]);
}(window.angular));
