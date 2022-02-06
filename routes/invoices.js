var express = require('express');
var router = express.Router();

Customer = require('../models/customer.js'); 
Invoice = require('../models/invoice.js');

//Get All Invoices
router.get('/', function(req, res){
    Invoice.getInvoices(function(err, invoices){
        if(err){
             res.send(err);
        }
        res.json(invoices);
    });

});

//Get Single Invoice
router.get('/:id', function(req, res){
    Invoice.getInvoiceById(req.params.id, function(err, invoice){
        if(err){
             res.send(err);
        }
        res.json(invoice);//added ;
    });

});

//Add invoice 
router.post('/', function(req, res){
    var invoice = req.body;
    Invoice.addInvoice(invoice, function(err, invoice){
        if(err){
            res.send(err);
       }
       res.json(invoice);//added ;
   });

});

//Update invoice
router.put('/:id', function(req, res){
    var id = req.params.id;
    var invoice = req.body;
    Invoice.updateInvoice(id, invoice, {}, function(err, invoice){

   if(err){
            res.send(err);
       }
       res.json(invoice);//added ;
   });

});

//Delete request for Invoice
router.delete('/:id', function(req, res){
    var id = req.params.id;
    Invoice.removeInvoice(id, function(err, invoice){
        if(err){
            res.send(err);
       }
       res.json(invoice);//add ;
    
        });
    
    });

    //Get All Invoices For a Single Customer
    router.get('/customer/:customer_.id', function(req, res){
        var customer_id = req.params.customer_id;
        Invoice.getCustomerInvoices(customer_id, function(err, invoices ){
            if(err){
                res.send(err);
            }
            res.json(invoices);
        });
    });


module.exports = router;