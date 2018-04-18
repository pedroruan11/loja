angular.module('MenuDiretiva', [])
.directive('menuDiretiva', function() {
  return {
      restrict : 'E',
      templateUrl: "views/menu.html"
      }
});
