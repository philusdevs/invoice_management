var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var mongoose = require('mongoose');

var customers = require('./routes/customers');
var invoices = require('./routes/invoices');

//Mongoose Connect 
//connects database 
mongoose.connect('mongodb://localhost/invoicr');
var db = mongoose.connection;

app.use(express.static(__dirname + '/client/'));
app.use('/client', express.static('client'));
app.use(bodyParser.json());

    
app.get('/', function(req, res){
    res.send('Please use /api/customers or api/invoices');

});

app.use('/api/customers', customers);
app.use('/api/invoices', invoices);
app.listen(3000);
console.log('Started on port 3000...');


  

