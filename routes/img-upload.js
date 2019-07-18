var express = require("express");
var app = express();

var upload = require("../services/img-upload.js");

var singleUpload = upload.single('image');

app.post('/img-upload', function(req, res) {

  singleUpload(req, res, function(err) {

    if (err) {
      return res.status(422).send({errors: [{title: 'File Upload Error', detail: err.message}] });
    }
    console.log("img uploaded")
    return res.json({'imageUrl': req.file.location});
  });
});
