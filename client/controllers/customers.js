var myApp = angular.module('myApp');

//The following code perfroms CRUD Operations for Customers
//These dependencies below also
//allows you to bind data to and fro from the view --scope
//allows you to use get, post, delete and update requests --using http
//help out with routing and  redirecting --location
myApp.controller('CustomersController', ['$scope', '$http', '$location', '$routeParams', function($scope, $http, $location, $routeParams){
    console.log('Customer Controller Initialized...');

    
        $scope.getCustomers = function(){

            $http({
                method: 'GET',
                url: '/api/customers'
             }).then(function (response){
                
                var data = response.data;
                $scope.customers = data;
                console.log(data);
             },function (error){
          
             });
        }
        
        $scope.getCustomer = function(){

            var id = $routeParams.id;
                $http.get('/api/customers/'+id).then(function(response){
                var data = response.data;
                $scope.customer = data;
                    
                });
            }

            $scope.getCustomerInvoices = function(){

                var id = $routeParams.id;
                    $http.get('/api/invoices/customers/'+id).then(function(response){
                    var data = response.data;
                    $scope.customer_invoice = data;
                    });
                }

            $scope.addCustomer = function(){

                
                $http.post('/api/customers/', $scope.customer).then(function(response){
                    var data = response.data;
                    $scope.customer = data;
                        window.location.href ='/#customers';
                    });
                }

                $scope.updateCustomer = function(){

                    $http.put('/api/customers/' +$scope.customer._id, $scope.customer).then(function(response){
                        var data = response.data;
                        $scope.customer = data;
                            window.location.href ='/#customers';
                        });
                    }

                    $scope.deleteCustomer = function(id){

                        $http.delete('/api/customers/' +id).then(function(response){
                            var data = response.data;
                            $scope.customer = data;
                                window.location.href ='/#customers';
                            });
                        }
    
}]);



