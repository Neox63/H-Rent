const database = require("./database.js");
const multer = require('multer');
const path = require('path');
const crypto = require('crypto');
var storage = multer.diskStorage({
    destination: function (req, file, cb) {
       cb(null, 'uploads');
    },
    filename: function (req, file, cb) {
        // randomBytes function will generate a random name
        let customFileName = crypto.randomBytes(18).toString('hex')
        // get file extension from original file name
        let fileExtension = path.extname(file.originalname).split('.')[1];
       cb(null, customFileName +"."+ fileExtension);
    }
 });
var upload = multer({ storage: storage });

module.exports = { upload };