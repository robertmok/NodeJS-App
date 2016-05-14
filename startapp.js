var express = require('express');
var app = express();

app.set('views','./views');
app.set('view engine','jade');

app.get('/', function(request,response){
    response.render('main', {pageTitle: 'Homepage', home: 'active', about: 'unactive'});
});

app.get("/about", function(request, response){
    response.render('about', {pageTitle: 'About', home: 'unactive', about: 'active'});
});

app.get("*", function(request, response){
    response.end("404 Page not Found!");
})

app.listen(8080);