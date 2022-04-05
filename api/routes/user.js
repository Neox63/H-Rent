const express = require("express");
const router = express.Router();
const user = require("../services/user.js");

router.get("/", async (req, res, next) => {
  try {
    res.json(await user.getUsers(req.query.page));
  } catch (err) {
    console.error(err.message);
    next(err);
  }
});

router.post("/create", async (req, res, next) => {
  try {
    res.json(await user.createUser(req.body));
  } catch (err) {
    console.error(err.message);
    next(err);
  }
});

router.put("/update/:id", async (req, res, next) => {
  try {
    res.json(await user.createUser(req.params.id, req.body));
  } catch (err) {
    console.error(err.message);
    next(err);
  }
});

router.delete("/delete/:id", async (req, res, next) => {
  try {
    res.json(await user.deleteUser(req.params.id));
  } catch (err) {
    console.error(err.message);
    next(err);
  }
});

router.post("/login", async (req, res, next) => {
  try {
    res.json(await user.checkLogin(req.body));
  } catch (err) {
    console.error(err.message);
    next(err);
  }
});

module.exports = router;