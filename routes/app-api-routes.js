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
    // app.post("/api/match", function (req, res) {
    //     db.Match.create(req.body).then(function (match) {
    //         res.json(match)
    //     });
    // });

    // Getting data from tables to show matches on front end
    // app.get("/api/matches/:size/:energetic/:dominant", function(req, res) {


    app.get("/api/matches/:size/:energetic/:dominant", function (req, res) {
        var matchArr = {
            newArr: []
        };

        db.Pupper.findAll().then(function (data) {
            console.log('DATA LENGTH ======= ' + data.length);
            for (i = 0; i < data.length; i++) {
                if (data[i].size === req.params.size
                    && data[i].energetic === req.params.energetic
                    && data[i].dominant === req.params.dominant) {
                    console.log("????????????????????????????????????????????")
                    matchArr.newArr.push(data[i].ownerName, data[i].dogName, data[i].image);
                } else if (data[i].size === req.params.size && data[i].energetic === req.params.energetic) {
                    console.log("HERE1")
                    matchArr.newArr.push(data[i]);
                } else if (data[i].size === req.params.size) {
                    console.log("HERE2")
                    matchArr.newArr.push(data[i]);
                } else if (req.params.size === 4 && req.params.energetic === 4 && req.params.dominant === 4) {
                    matchArr.newArr.push(data[i]);
                } else if (req.params.size === 4
                    && data[i].energetic === req.params.energetic
                    && data[i].dominant === req.params.dominant) {
                    matchArr.newArr.push(data[i]);
                } else if (req.params.size === 4 && data[i].energetic === req.params.energetic) {
                    matchArr.newArr.push(data[i]);
                } else if (req.params.size === 4 && data[i].dominant === req.params.dominant) {
                    matchArr.newArr.push(data[i]);
                } else {
                    //Return this as a 404 error
                    console.log("no matches");
                }
            }
            console.log('Matcharr' + matchArr.newArr);
            res.render('index', matchArr);
        });

    });

    // });
}
        // console.log(req.params.size);

            // console.log(req.params.energetic);
            // console.log(req.params.dominant);

            // db.Pupper.findAll({

            //     where: {
            //         size: req.params.size,
            //         energetic: req.params.energetic,
            //         dominant: req.params.dominant
            //     }
            // }).then(function(data){


            //     console.log('This is the data for the get' + data);

            //     // console.log("this is the data from the get" + data.ownerName + data.dogName + data.image);

            // });


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
