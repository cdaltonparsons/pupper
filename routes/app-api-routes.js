// Requiring our models
var db = require("../models");
var nodemailer = require("nodemailer");

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

      
    // Adding to Puppers table
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

    // Getting matches from Puppers table based on filters
    app.get("/api/matches/:size/:energetic/:dominant", function (req, res) {
       
        db.Pupper.findAll({

            where: {
                size: req.params.size,
                energetic: req.params.energetic,
                dominant: req.params.dominant
            }
        }).then(function (data) {
            res.json(data)

        });

    });


    app.get("/api/images/:id", function (req, res) {

        db.Pupper.findOne({
            where: {
                id: req.params.id
            }
        }).then(function (data) {
            console.log(data.image);
            res.writeHead(200, {"Content-Type": "image/jpeg"});
            res.end(data.image, "binary");
            
        });

    });

    // Nodemailer =========================================

    app.post("/send", function (req, res) {
        var output = `
        <p> A match has requested to contact you! </p>
        <h3> Contact Details: </h3>
        <ul> 
        <li> Name: ${req.body.name} </li>
        <li> Email: ${req.body.email} </li>
        </ul>
        <h3> Message: </h3>
        <p> ${req.body.message} </p>
        `;

        const transporter = nodemailer.createTransport({
            // host: 'gmail',
            host: 'smtp.gmail.com',
            port: 465,
            // port: 587,
            auth: {
                user: 'pupperconnectionapp@gmail.com',
                pass: 'PupperApp1!'
            }
        });

        // send mail with defined transport object
        let mailOptions = {
            from: '"Pupper Contact" <pupperconnectionapp@gmail.com>', // sender address
            to: "jessicadawnsewell@gmail.com", // list of receivers
            subject: "Pupper Contact Request", // Subject line
            text: "Hello world?", // plain text body
            html: output // html body from above
        };

        transporter.sendMail(mailOptions, (error, info) => {
            console.log("hey")
            if (error) {
                return console.log(error);
            }
            console.log("Message sent: %s", info.messageId);
            // res.json("message", "Email has been sent!")
            // console.log("Preview URL: %s", nodemailer.getTestMessageUrl(info));
    
        })
    });


}


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
