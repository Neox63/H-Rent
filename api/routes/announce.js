const express = require("express");
const router = express.Router();
const announce = require("../services/announce.js");

router.get("/", async (req, res, next) => {
  try {
    res.json(await announce.getAnnounces(req.query.page));
  } catch (err) {
    console.error(err.message);
    next(err);
  }
});

router.get("/create", async (req, res, next) => {
  try {
    // res.json(await announce.createAnnonce(req.body));
    res.writeHead(req.body)
  } catch (err) {
    console.error(err.message);
    next(err);
  }
});

module.exports = router;