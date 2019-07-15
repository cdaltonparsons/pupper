// NPM dependencies / requirements
var express = require('express');
var app = express();
var PORT = process.env.PORT || 8080;

var db = require("./models");

// middleware
app.use(express.urlencoded({extended: true}));
app.use(express.json());
app.use(express.static("public"));

// routes
require("./routes")(app);

// syncing the sequelize models and starting up the server
db.sequelize.sync().then(function() {
    app.listen(PORT, function() {
        console.log("App listening on PORT " + PORT);
    });
});