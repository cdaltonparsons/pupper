// Requiring our models
var db = require("../models");
var nodemailer = require("nodemailer");
var Sequelize = require("sequelize");
var Op = Sequelize.Op

// Routes =============================================================
module.exports = function (app) {

    // Adding to Puppers table
    app.post("/api/pups", function (req, res) {

        req.body.ownerId = req.session.passport.user;

        db.Pupper.create(req.body).then(function (pupper) {
            console.log(req.body);
            res.json(pupper);
        });
    });

    // Getting matches from Puppers table based on filters
    app.get("/api/matches/:size/:energetic/:dominant", function (req, res) {

        db.Pupper.findAll({

            where: {
                ownerId: {
                    [Op.not]: req.session.passport.user
                },
                size: req.params.size,
                energetic: req.params.energetic,
                dominant: req.params.dominant
            }
        }).then(function (data) {
            res.json(data)

        });

    });

    app.get("/api/ownerinfo", function (req, res) {
       
        db.User.findOne({
            where: {
                id: req.session.passport.user
            }
        }).then(function (data) {
            res.json(data)
            console.log(data)
        });
    });


        // Nodemailer =========================================

        app.post("/send", function (req, res) {
            // app.post("/send/:id", function (req, res) {
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

