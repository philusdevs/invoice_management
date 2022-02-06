var mongoose = require('mongoose');

//Customer Schema
var customerSchema = mongoose.Schema({
    first_name: {
        type:String,
        required: true
    },
    last_name: {
        type:String,
        required: true
    },
    company : {
        type:String
        
    },
    logo_url: {
        type:String,
        required: true
    },
    email: {
        type:String,
        required: true
    },
    phone: {
        type:String
        
    },
    address: {

        street:String,
        city:String,
        province: String,
        zip: String
         },
    CreatedAt: {
        type: Date,
        default: Date.now
        
    },
}); 

var Customer = module.exports = mongoose.model('Customer', customerSchema );

//Get Customers 
module.exports.getCustomers = function(callback, limit){
    Customer.find(callback).limit(limit).sort([['first_name', 'ascending']]);

}

//Get Customer
module.exports.getCustomerById = function(id, callback){
    Customer.findById(id, callback);

}

//Add Customer 

module.exports.addCustomer = function(customer, callback){
var add = {
    first_name: customer.first_name,
    last_name: customer.last_name,
    company: customer.company,
    logo_url: customer.logo_url,
    email: customer.email,
    phone: customer.phone,
    address: {
        street: customer.address.street,
        city: customer.address.city,
        province: customer.address.province,
        zip: customer.address.zip
    }
}
Customer.create(add, callback);

}

//Update Customer 

module.exports.updateCustomer = function(id, customer, options, callback){
var query ={_id: id};
var update = {
    first_name: customer.first_name,
    last_name: customer.last_name,
    company: customer.company,
    logo_url: customer.logo_url,
    email: customer.email,
    phone: customer.phone,
    address: {
        street: customer.address.street,
        city: customer.address.city,
        province: customer.address.province,
        zip: customer.address.zip
    }

}
Customer.findOneAndUpdate(query, update, options, callback);

}

//Remove Customer 
module.exports.removeCustomer = function(id, callback){
    var query = {_id:id};
    Customer.remove(query, callback);
}