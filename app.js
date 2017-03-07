
var express = require('express'); 
var path = require('path');

var app = express();
var port = process.env.PORT || 3000; 


var types = [
    {id : 1, desc : 'Global News'},
    {id : 2, desc : 'Indian News'},
    {id : 3, desc : 'Sports News'},
    {id : 4, desc : 'Business News'},
    ];
 

var items =  [
    { name :'BBC',          id : 1,     url : 'http://www.bbc.co.uk'},
    { name :'CNN',          id : 1,     url : 'http://www.cnn.com'},
    { name :'NYTIMES',      id : 1,     url : 'http://www.nytimes.com'},
    { name :'FOX NEWS',     id : 1,     url : 'http://www.foxnews.com'},
    { name :'NBC NEWS',     id : 1,     url : 'http://www.nbcnews.com'},
    { name : 'TIMES OF INDIA',  id : 2,     url : 'http://www.timesofindia.com'},
    { name : 'The Hindu',       id : 2,     url : 'http://www.thehindu.com'},
    { name : 'Indian Express',  id : 2,     url : 'http://www.newindpress.com'},
    { name : 'NDTV',            id : 2,     url : 'http://www.ndtv.com'},
    { name : 'HINDUSTAN TIMES', id : 2,     url : 'http://www.hindustantimes.com'},
    { name : 'CRICINFO',        id : 3,     url : 'http://www.cricinfo.com'},
    { name : 'ESPN',            id : 3,     url : 'http://www.espn.com'},
    { name : 'NFL',             id : 3,     url : 'http://www.nfl.com'},
    { name : 'NBA',             id : 3,     url : 'http://www.nba.com'},
    { name : 'SKY SPORT',       id : 3,     url : 'http://www.skysports.com'},
    { name : 'Reuters',         id : 4,     url : 'http://www.reuters.com'},
    { name : 'Bloomberg',       id : 4,     url : 'http://www.bloomberg.com'},
    { name : 'FT',              id : 4,     url : 'http://www.ft.com'},
    { name : 'WSJ',             id : 4,     url : 'http://www.wsj.com'},
    { name : 'Economic Times',  id : 4,     url : 'http://www.economictimes.com'}
    ];

app.set('view engine', 'pug');
app.set('views', path.join(__dirname + '/views'));

/* //app.use(express.static(__dirname + '/static'));  */


app.get('/', function(req, res){
    /* //res.render('index2', {types, items}); */
    res.render('index', {types, items});
});

app.listen(port);




