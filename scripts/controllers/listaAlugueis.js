(function(){
    'use strict';
    
angular.module('ListaAlugueis', [])
.controller("ListaAlugueis", listaAlugueis,
["$scope",
 "$location",
  "AppService"])
    function listaAlugueis($scope, $location, AppService) {
        $scope.list = new Array();
        $scope.getAge = function (person) {
            return AppService.calcAge(person);
        };
        $scope.refreshList = function () {
            AppService.listaAlugueis(function (result) {
                $scope.list = result.data;
            }, function (error) {
                alert("Não foi possível atualizar a lista de registros.");
            });
        };
        $scope.deleteItem = function (id) {
            AppService.deleteOne(id, function (result) {
                if (result.data == "ok") {
                    alert("Registro removido.");
                    $scope.refreshList();
                } else {
                    alert("Não foi possível remover o registro.");
                }
            }, function (error) {
                alert("Não foi possível remover o registro.");
            });
        };
        $scope.editItem = function (id) {
            $location.path("/form/" + id);
        };
        $scope.refreshList();
    }
})();