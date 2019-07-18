// Dependencies
// =============================================================
var path = require("path");

// Routes
// =============================================================
module.exports = function(app) {


  app.get("/", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/home.html"));
  });

  // Route to the cms page
  // app.get("/survey", function(req, res) {
  //   res.sendFile(path.join(__dirname, "../public/main-survey.html"));
  // });

  // blog route loads blog.html
  // app.get("/match", function(req, res) {
  //   res.sendFile(path.join(__dirname, "../public/match-survey.html"));
  // });

  // sign up route loads signup.html
  app.get("/signup", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/signup.html"));
  });

  app.get("/messages", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/messages.html"));
  });

  app.get("/signin", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/signin.html"));
  });


};