// Requiring our models
var db = require("../models");

// Routes =============================================================
module.exports = function (app) {

    var upload = require("../services/img-upload.js");

    var singleUpload = upload.single('image');

    app.post('/img-upload', function(req, res) {

        singleUpload(req, res, function(err) {
      
          if (err) {
            return res.status(422).send({errors: [{title: 'File Upload Error', detail: err.message}] });
          }
    //   this is the img url after it has been successfully uploaded
          return res.json({'imageUrl': req.file.location});
        });
      });

      
    // Adding to pupper table
    app.post("/api/pups", function (req, res) {
        db.Pupper.create(req.body).then(function (pupper) {
            console.log(req.body);
            res.json(pupper);
        });
    });

    // Adding to match table
    app.post("/api/match", function (req, res) {
        db.Match.create(req.body).then(function (match) {
            res.json(match)
        });
    });

    // Getting data from tables to show matches on front end
    app.get("/api/matches/:size/:energetic/:dominant", function(req, res) {


        db.Pupper.findAll({
            where: {
                size: req.params.size,
                energetic: req.params.energetic,
                dominant: req.params.dominant
            }
        }).then(function(data){
            res.json(data);
            console.log(data);
        });


        // var query = {};

        // if (db.Pupper.size === 1) {
        //     query.size = 

        // } else {

        // }

        // db.Pupper.findAll({
        //     where: query, 
        //     include: [ db.Match ]
        // }).then(function(data){
        //     res.json(data);
        // });


        // db.Pupper.findAll({}).then(function(data){
        //     res.json(data);
        // });

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
// }
