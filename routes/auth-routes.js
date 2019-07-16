var db = require("../models");
// var passport = require("passport-local")
module.exports = function(app, passport) {

app.post(
  "/signup",
  passport.authenticate("local-signup", {
    successRedirect: "../public/main-survey.html",
    failureRedirect: "../public/signup"
  })
);

}