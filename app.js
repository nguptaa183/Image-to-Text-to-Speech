var express = require("express");
// var tesseract = require('tesseract.js')
var app = express();

// set the port of our application
// process.env.PORT lets the port be set by Heroku
var port = process.env.PORT || 8080;

// make express look in the public directory for assets (css/js/img)
app.use(express.static(__dirname + '/public'));

// set the home page route
app.get('/', function(req, res){
    res.render('index.ejs');
}); 




app.listen(port, function(){
    console.log('Imgeech app running on port ' + port);
});

