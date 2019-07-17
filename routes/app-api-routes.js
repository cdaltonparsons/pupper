// Requiring our models
var db = require("../models");

// Routes =============================================================
module.exports = function (app) {


    // app.get("/api/pups", function(req, res) {

    // })

    // Adding to pupper table
    app.post("/api/match", function (req, res) {
        db.Match.create(req.body).then(function (match) {
            res.json(match)
        });
    });

    // Adding to match table
    app.post("/api/pups", function (req, res) {
        db.Pupper.create(req.body).then(function (pupper) {
            res.json(pupper)
        });
    });
};

    // PUT route for updating posts
//     app.put("/api/pups", function (req, res) {
//         db.Pupper.update(
//             req.body,
//             {
//                 where: {

//                 }
//             }).then(function (pupper) {
//                 res.json(pupper);
//             });
<<<<<<< HEAD
//     });
};
=======
// }
>>>>>>> 6f9acb4f7ec7f12c936837c18c390e566bec6748
