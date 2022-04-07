const express = require("express");
const router = express.Router();
const document = require("../services/document.js");
const user = require("../services/user.js");

router.get("/", async (req, res, next) => {
    try {
      res.json(await document.getDocuments(req.query.page));
    } catch (err) {
      console.error(err.message);
      next(err);
    }
});

router.post("/addToUser",async (req,res,next) => {
    console.log(req.body);
    console.log(req.file);
    if(req.body.image && req.body.idUser) {
        if(user.existUser(req.body.idUser)) {
            res.json('OK');
        } else {
            res.status(400).json("The user does not exist");
        }
    } else {
        res.status(400).json("Missing elements");
    }
});

module.exports = router;