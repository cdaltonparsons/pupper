// Requiring our models
var db = require("../models");

// Routes =============================================================
module.exports = function (app) {

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

        app.get("/api/matches/:size/:energetic/:dominant", function(req, res){
            var matchArr = {
                []};
            for(i = 0; i < db.Pupper.length; i++){
                if(db.Pupper[i].size === req.params.size && pupper[i].energetic === req.params.energetic && pupper[i].dominant === req.params.energetic){
                    matchArr.push(db.Pupper[i]);
                }else if(db.Pupper[i].size === req.params.size && pupper[i].energetic === req.params.energetic){
                    matchArr.push(db.Pupper[i])
                }else if(db.Pupper[i].size === req.params.size){
                    matchArr.push(db.Pupper[i])
                }
            }
            console.log('Matcharr' + matchArr);
            res.render('index', matchArr)
        })
        
    };
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
