var db = require("../models");
var passport = require("passport-local");
var path = require("path")
module.exports = function(app, passport) {
  // POST routes for signing up and also signing in.
  // consider adding an alert or something letting the user know why they failed()
  app.post('/signup', passport.authenticate('local-signup', { successRedirect: '/survey',
  failureRedirect: '/' }));

  app.post(
    "/signin",
    passport.authenticate("local-signin", {
      successRedirect: "/survey",
      failureRedirect: "/signin"
    })
  );

  // protected GET routes to ensure user is signed in 

  app.get("/survey", isLoggedIn, function(req, res) {
    res.sendFile(path.join(__dirname, "../public/main-survey.html"))
  });

  app.get("/match", isLoggedIn, function(req, res) {
    res.sendFile(path.join(__dirname, "../public/match-survey.html"))
  });

  app.get("/matches", isLoggedIn, function(req, res) {
    res.sendFile(path.join(__dirname, "../public/matches.html"))
  });

  app.get("/contact", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/contact.html"));
  });

  app.get("/logout", function(req, res) {
    req.session.destroy(function(err) {
      res.redirect("/")
    })
  });

  function isLoggedIn(req, res, next) {
    if (req.isAuthenticated()) return next();

    res.redirect("/");
  }
}