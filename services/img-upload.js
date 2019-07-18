var aws = require('aws-sdk');
var multer = require('multer');
var multerS3 = require('multer-s3');

require("dotenv").config();

aws.config.update({
  secretAccessKey: "SS1/6qavg7qnWiByfEDP+qF+vj8Ml2UURODjWHQE",
  accessKeyId: "AKIAJKUVKHKA5CJE66WQ",
  region: 'us-east-2'
});

var s3 = new aws.S3();

var fileFilter = (req, file, cb) => {
  if (file.mimetype === 'image/jpeg' || file.mimetype === 'image/png') {
      cb(null, true)
  } else {
      cb(new Error('Invalid Mime Type, only JPEG and PNG'), false);
  }
}

var upload = multer({
  fileFilter: fileFilter,
  storage: multerS3({
    s3: s3,
    bucket: 'pupper-bucket',
    acl: 'public-read',
    metadata: function (req, file, cb) {
      cb(null, {fieldName: 'TESTING_META_DATA!'});
    },
    key: function (req, file, cb) {
      cb(null, Date.now().toString())
    }
  })
})

module.exports = upload;