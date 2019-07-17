
// *** Dependencies
// =============================================================
var express = require("express");
var passport = require("passport");
var session = require("express-session")
// Sets up the Express App
// =============================================================
var app = express();
var PORT = process.env.PORT || 8080;

// Requiring our models for syncing
var db = require("./models");

// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// for passport
// app.use(
//   session({ secret: "keyboard cat", resave: true, saveUninitialized: true })
// ); // session secret
app.use(passport.initialize());
app.use(passport.session());

// Static directory
// app.use(express.static("public"));

require("./routes/html-routes.js")(app)
require("./routes/app-api-routes.js")(app)
require("./routes/auth-routes.js")(app)
require("./config/passport/passport.js")(passport, db.user);

// Routes
require("./routes/app-api-routes.js")(app);
require("./routes/auth-routes.js")(app);
require("./routes/html-routes.js")(app);

// Start our server so that it can begin listening to client requests.
db.sequelize.sync( { force: true }).then(function(){
  app.listen(PORT, function() {
    // Log (server-side) when our server has started
    console.log("Server listening on: http://localhost:" + PORT);
  });
})
