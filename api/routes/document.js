const express = require("express");
const router = express.Router();
const announce = require("../services/document.js");

router.get("/", async (req, res, next) => {
    try {
      res.json(await document.getDocuments(req.query.page));
    } catch (err) {
      console.error(err.message);
      next(err);
    }
});

module.exports = router;