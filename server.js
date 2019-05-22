var express = require("express");
var bodyParser = require('body-parser');
var app = express();
var path = require("path");


var PORT = process.env.PORT || 4747;
var urlencodedParser = bodyParser.urlencoded({extended: true});

app.use(bodyParser.json({ type: 'application/**json'}));
app.use(bodyParser.raw({ type: 'application/vnd.custom-type'}));
app.use(bodyParser.text({ type: 'text/html'}));

require("./app/routing/htmlRoutes.js")(app);


app.listen(PORT,() => {console.log("App listening on PORT " + PORT)});

