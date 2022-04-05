const picture = require("../services/picture.js");
const express = require('express');
const app = express();
const router = express.Router();
const upload = require('../uploadMiddleware');

router.get('/', async function (req, res) {
    await res.render('index');
});

router.post('/upload', picture.upload.single('image'),(req, res) => {
    res.send("Success");
});

module.exports = router;