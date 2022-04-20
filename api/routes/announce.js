const express = require("express");
const router = express.Router();
const announce = require("../services/announce.js");

router.get("/", async (req, res, next) => {
  try {
    res.json(await announce.getAd(req.query.page));
  } catch (err) {
    console.error(err.message);
    next(err);
  }
});

router.get("/id", async (req, res, next) => {
  try {
    res.json(await announce.getAdById(req.query.page));
  } catch (err) {
    console.error(err.message);
    next(err);
  }
});

router.post("/create", async (req, res, next) => {
  try {
    res.json(await announce.createAd(req.body));
  } catch (err) {
    console.error(err.message);
    next(err);
  }
});

module.exports = router;