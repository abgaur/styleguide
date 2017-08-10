;(function(ng) {
  "use strict";

  ng.module("styleguide")
    .config([
      "$routeProvider",
      function($routeProvider) {
        $routeProvider
          .when("/", {
            templateUrl: "components/templates/about.html",
           
          })
          .when("/new", {
            templateUrl: "todo/templates/new.html"
            
          })
          .when("/buttons", {
            templateUrl: "components/templates/buttons.html"
            
          })
          .otherwise({
            redirectTo: "/"
          });
      }
    ]);
}(window.angular));
