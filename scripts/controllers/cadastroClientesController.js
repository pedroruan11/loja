(function(){
    'use strict';
angular.module('CadastroClientesController', [])
.controller("CadastroClientesController", [
    "$scope", "$routeParams", "$location", "AppService",
    function ($scope, $routeParams, $location, AppService) {
        $scope.record = {
            id: $routeParams.id
        };
        $scope.salvarCliente = function () {
            AppService.salvarCliente($scope.record, function (result) {
                if (result.data == "ok") {
                    if ($scope.id > 0) {
                        alert("Registro alterarado.");
                    } else {
                        alert("Registro inserido.");
                    }
                } else {
                    if ($scope.record.id > 0) {
                        alert("Não foi possível alterar o registro.");
                    } else {
                        alert("Não foi possível inserir o registro.");
                    }
                }
            }, function (error) {
                if ($scope.record.id > 0) {
                    alert("Não foi possível alterar o registro.");
                } else {
                    alert("Não foi possível inserir o registro.");
                }
            });
        };
    }
]);
})();