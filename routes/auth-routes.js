
var controller = require("../controllers/pupper_controller.js");

module.exports = function (app, passport) {
  app.get("/signup", controller.signup);

  app.get("/signin", controller.signin);

  app.post(
    "/signup",
    passport.authenticate("local-signup", {
      successRedirect: "/dashboard",
      failureRedirect: "/signup"
    })
  );

  app.get("/dashboard", isLoggedIn, authController.dashboard);

  app.get("/logout", authController.logout);

  app.post(
    "/signin",
    passport.authenticate("local-signin", {
      successRedirect: "/dashboard",
      failureRedirect: "/signin"
    })
  );
=======
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