const express = require('express');
const routing = express.Router();
const multer = require('multer');
const controller = require('../controller')

var storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, './public/upload');
    },
    filename: (req, file, cb) => {
        cb(null, file.originalname);
    }
})
var upload = multer({ storage: storage })
routing.get('*', (req, res) => { res.render('index.ejs') })
routing.post('/importfile', upload.single('file', controller.importFile));
module.exports = routing;