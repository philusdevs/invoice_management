var myApp = angular.module('myApp');

//The following code perfroms CRUD Operations for Invoices
//These dependencies below also
//allows you to bind data to and fro from the view --scope
//allows you to use get, post, delete and update requests --using http
//help out with routing and  redirecting --location
myApp.controller('InvoicesController', ['$scope', '$http', '$location', '$routeParams', function($scope, $http, $location, $routeParams){
    console.log('Invoice Controller Initialized...');

    
        $scope.getInvoices = function(){$http({
                method: 'GET',
                url: '/api/invoices'
             }).then(function (response){
                //$scope.customers = response;
                var data = response.data;
                $scope.invoices = data;
                console.log(data);
             },function (error){
          
             });
        }
        $scope.getInvoice = function(){
             var id = $routeParams.id;
            $http({
                method: 'GET',
                url: '/api/invoices/'+id
             }).then(function (response){
                var data = response.data;
                $scope.invoice = data;
                console.log(data);
                //Fill select
                $scope.invoice.customer_id = response.customer._id;
                $scope.invoice.status = response.invoice.status;
             },function (error){
          
             });
            }

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

            $scope.addInvoice = function(){

                $http.post('/api/invoices/', $scope.invoice).then(function(response){
                    var data = response.data;
                    $scope.invoice = data;
                        window.location.href ='/#invoices';
                    });
                }

                $scope.updateInvoice = function(){

                    $http.put('/api/invoices/'+$scope.invoice._id, $scope.invoice).then(function(response){
                        var data = response.data;
                        $scope.invoice = data;
                            window.location.href ='/#invoices';
                        });
                    }

                    $scope.deleteInvoice = function(id){

                        $http.delete('/api/invoices/' +id).then(function(response){
                            var data = response.data;
                            $scope.invoice = data;
                                window.location.href ='/#invoices';
                            });
                        }
                    
            
    
}]);

