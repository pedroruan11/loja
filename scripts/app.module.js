(function(){
    'use strict'

angular.module("AppModule", [
    "ngRoute", 
    "LoginController",
    "MenuDiretiva",
    "AppService",
    "ListaAlugueis",
    "CadastroClientesController",
    "ConsultaClientesController"

]).config([
    "$routeProvider", function ($routeProvider) {
        $routeProvider.when('/login', {
            templateUrl: './views/login.html',
            controller: 'LoginController'
        }).when('/inicial', {
            templateUrl: './views/inicial.html'
        }).when('/cadastro_veiculos', {
            templateUrl: './views/cadastro_veiculos.html'
        }).when('/cadastro_clientes', {
            templateUrl: './views/cadastro_clientes.html',
            controller: 'CadastroClientesController'
        }).when('/alugar_veiculo', {
            templateUrl: './views/cadastro_teste.html'
        }).when('/consultar_aluguel', {
            templateUrl: './views/consultar_aluguel.html',
            controller: 'ListaAlugueis'
        }).otherwise({
            redirectTo: '/login'
        });
    }
]);
 
})();