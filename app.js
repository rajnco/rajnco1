
var express = require('express'); 
var path = require('path');

var app = express();
var port = process.env.PORT || 3000; 

app.set('view engine', 'pug');
app.set('views', path.join(__dirname + 'views'));

//app.use(express.static(__dirname + '/static')); 

app.get('/', function(req, res){
    res.render('index');
});

app.listen(port);




