(function(){
    'use strict';
angular.module('LoginController', [])
.controller("LoginController", [
    "$scope", "$routeParams", "$location", 
    function ($scope, $routeParams, $location) {        
            $location.path("/login");
        
    }
]);
})();