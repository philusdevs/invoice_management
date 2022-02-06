var myApp = angular.module('myApp');


myApp.controller('DashboardController', ['$scope', '$http', '$location', function($scope, $http, $location){
    console.log('Dashboard Controller Initialized...');
}]);

//dependencies
//allows you to bind data to and fro from the view --scope
//allows you to use get, post, delete and update requests --using http
//help out with routing and  redirecting --location