angular.module('AppService', [])
.factory('AppService', [
    "$http",
    function ($http) {
        return {
            listaAlugueis: function (success, fail) {
                $http.get("http://localhost/loja/alugueis").then(success, fail);
            },
            listaVeiculos: function (success, fail) {
                $http.get("http://localhost/loja/veiculos").then(success, fail);
            },
            listaClientes: function (success, fail) {
                $http.get("http://localhost/loja/clientes").then(success, fail);
            },
            findOne: function (id, success, fail) {
                $http.get("http://localhost/api/person/" + id).then(success, fail);
            },
            deleteOne: function (id, success, fail) {
                $http.delete("http://localhost/api/person/" + id).then(success, fail);
            },
            salvarCliente: function (item, success, fail) {
                if (item.id > 0) {
                    $http.put("http://localhost/loja/clientes", item).then(success, fail);
                } else {
                    $http.post("http://localhost/loja/clientes", item).then(success, fail);
                }
            },
            calcAge: function (item) {
                if (item.birthDate) {
                    var now = new Date();
                    var birth = new Date(item.birthDate);
                    if ((now.getMonth() == birth.getMonth() && now.getDate() < birth.getDate()) || (now.getMonth() < birth.getMonth())) {
                        return now.getFullYear() - birth.getFullYear() - 1;
                    } else {
                        return now.getFullYear() - birth.getFullYear();
                    }
                } else {
                    return "N/A";
                }
            }
        };
    }])