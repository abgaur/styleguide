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
          .otherwise({
            redirectTo: "/"
          });
      }
    ]);
}(window.angular));
