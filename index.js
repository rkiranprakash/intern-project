var express = require('express')
var ejs = require('ejs')
var bodyParser = require('body-parser')
var mysql  require('mysql')

mysql.createConnection({
    host:"localhost",
    user: 
})

var app = express();

app.use(express.static('public'));
app.set('view engine','ejs');

app.listen(8080);
app.use(bodyParser.urlencoded({extended:true}));
//localhost:8080
app.get('/',function(req,res) {
    
    res.render('pages/index');


});