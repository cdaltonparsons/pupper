// Dependencies
// =============================================================
var path = require("path");

// Routes
// =============================================================
module.exports = function(app) {


  app.get("/", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/home.html"));
  });

  // sign up route loads signup.html
  app.get("/signup", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/signup.html"));
  });
<<<<<<< HEAD
  
=======
>>>>>>> 3f4dc03e07bc925eec9e77924eea8ed8db6a1565

  app.get("/signin", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/signin.html"));
  });

<<<<<<< HEAD

=======
>>>>>>> 3f4dc03e07bc925eec9e77924eea8ed8db6a1565
};