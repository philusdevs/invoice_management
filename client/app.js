var myApp = angular.module('myApp', ['ngRoute']);

//Changes routes of the webpage depending on where the user clicked e.g invoices, add customers, dashboard...etc
//allows you to use a routing system and allows you to send center urls to center places, and allows you to intialize controllers
//redirt urls if the initial urls do not match
myApp.config(function($routeProvider, $locationProvider){
    $locationProvider.hashPrefix('');
    $routeProvider.when("/", {
        controller: "DashboardController",
        templateUrl: "views/dashboard.html"
    }).when("/customers", {
        controller: "CustomersController",
        templateUrl: "views/customers.html"
    }).when("/customers/details/:id", {
            controller: "CustomersController",
            templateUrl: "views/customers_details.html"
            })
   .when("/invoices", {
        controller: "InvoicesController",
        templateUrl: "views/invoices.html"
    }).when("/invoices/details/:id", {
            controller: "InvoicesController",
            templateUrl: "views/invoices_details.html"
            })
        .when("/customers/add", {
                controller: "CustomersController",
                templateUrl: "views/add_customer.html"
                })
        .when("/invoices/add", {
                    controller: "InvoicesController",
                    templateUrl: "views/add_invoice.html"
                    })
        .when("/invoices/edit/:id", {
                        controller: "InvoicesController",
                        templateUrl: "views/edit_invoice.html"
                        })
                        
    .otherwise({
        redirectTo: "/"
        
});


})



 

