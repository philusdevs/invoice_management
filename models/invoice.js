var mongoose = require('mongoose');
const router = require('../routes/invoices');
const { query } = require('express');
const { populate } = require('./customer');
const customer = require('./customer');

//Invoice Schema
var invoiceSchema = mongoose.Schema({
    customer: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Customer'

    },
    service: {
        type:String,
        required: true
    },
    price : {
        type:String
        
    },
    due: {
        type:String
        
    },
    status: {
        type:String
        
    },
    phone: {
        type:String
        
    },
    createdAt: {
        type: Date,
        default: Date.now
        
    }
}); 

var Invoice = module.exports = mongoose.model('Invoice', invoiceSchema );

//Get Invoices 
module.exports.getInvoices = function(callback, limit){
    Invoice.find(callback).limit(limit).populate('customer').sort([['createdAt', 'descending']]);
   
     
}

//Get Invoice
module.exports.getInvoiceById = function(id, callback){

    var query = {_id: id};
    Invoice.findOne(query, callback).populate('customer');

}

//Add invoice 
module.exports.addInvoice = function(invoice, callback){
    var add = {
        customer: invoice.customer_id,
        service: invoice.service,
        price: invoice.price,
        due: invoice.due,
        status: invoice.status
    }
    Invoice.create(add, callback);
}

//Update Invoice 
module.exports.updateInvoice = function(id, invoice, options, callback){
    var query = {_id: id};
    var update = {
        customer: invoice.customer_id,
        service: invoice.service,
        price: invoice.price,
        due: invoice.due,
        status: invoice.status
    }
    Invoice.findOneAndUpdate(query, update, options, callback);
}

//Remove Invoice 
module.exports.removeInvoice = function(id, callback){
    var query = {_id:id};
    Invoice.remove(query, callback);
}

// Get Customer Invoices
module.exports.getCustomerInvoices = function(customer_id, callback, limit){
    var query = {Customer: customer_id};
    Invoice.find(query, callback).limit(limit).populate('customer').sort([['createdAt', 'descending']]);
}
