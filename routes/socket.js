var db = require("../models");
var http = require('http').Server(app);
var io = require('socket.io')(http);
var express = require("express");
var app = express();

module.exports = function (app) {
  
    app.get("/messages", (req, res) => {
        db.Message.findAll(req.body).then(function(messages) {
            console.log(req.body);
            res.json(messages);
        })
    })
    
    app.get("/messages/:user", (req, res) => {
        var user = req.params.user
        db.Message.findAll({
            where: {
                name: user
            }
        }).then(function(messages) {
            res.json(messages);
        });
    });
    
    app.post("/messages", (req, res) => {
    
        db.Message.create(req.body).then(function(err) {
            if (err) throw err;
            io.emit("message", req.body);
            res.sendStatus(200);
        });
    });
    
};