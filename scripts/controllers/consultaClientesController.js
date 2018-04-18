(function(){
    'use strict';
angular.module('ConsultaClientesController', [])
.controller("ConsultaClientesController", [
    "$scope", "$routeParams", "$location", "AppService",
    function ($scope, $routeParams, $location, AppService) {
        $scope.record = {
            id: $routeParams.id
        };
        if ($scope.record.id > 0) {
            AppService.findOne($scope.record.id, function (result) {
                $scope.record = result.data;
                $scope.record.birthDate = new Date($scope.record.birthDate);
                $scope.record.height = Number($scope.record.height);
            }, function (error) {
                alert("Não foi possível carregar o registro.");
                $scope.record = {};
            });
        }
        $scope.refreshList = function () {
            $location.path("/consulta_clientes");
        };
    }
]);
})();