var express = require('express');
const { route } = require('./invoices.js');
var router = express.Router();

Customer = require('../models/customer.js');
Invoice = require('../models/invoice.js');

//Get All Customers
router.get('/', function(req, res){
    Customer.getCustomers(function(err, customers){
        if(err){
             res.send(err);
        }
        res.json(customers)
    });

});

//Get Single Customer
router.get('/:id', function(req, res){
    Customer.getCustomerById(req.params.id, function(err, customer){
        if(err){
             res.send(err);
        }
        res.json(customer);//add ;
    });

});

//Add Customer 
router.post('/', function(req, res){
 var customer = req.body;
 Customer.addCustomer(customer, function(err, customer){
    if(err){
        res.send(err);
   }
   res.json(customer);//add ;
});
});

//Update Customer 
router.put('/:id', function(req, res){
    var id = req.params.id;
    var customer = req.body;
    Customer.updateCustomer(id, customer, {}, function(err, customer){
        if(err){
        res.send(err);
   }
   res.json(customer);//add ;

    });

});

//Delete request for Customer
router.delete('/:id', function(req, res){
    var id = req.params.id;
    Customer.removeCustomer(id, function(err, customer){
        if(err){
            res.send(err);
       }
       res.json(customer);//add ;
    
        });
    
    });
    
module.exports = router;