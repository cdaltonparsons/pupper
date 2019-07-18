// Requiring our models
var db = require("../models");

// Routes =============================================================
module.exports = function (app) {


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
    // app.get("/api/matches", function(req, res) {
    //     if (req.body.match)
    // })
};
   
