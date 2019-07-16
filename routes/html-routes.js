// Dependencies
// =============================================================
var path = require("path");

// Routes
// =============================================================
module.exports = function(app) {


  app.get("/", function(req, res) {
    res.sendFile(path.join(__dirname, "./home.html"));
  });

  app.get("/survey", function(req, res) {
    res.sendFile(path.join(__dirname, "./main-survey.html"));
  });


  app.get("/match", function(req, res) {
    res.sendFile(path.join(__dirname, "./match-survey.html"));
  });

};