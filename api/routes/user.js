const express = require("express");
const router = express.Router();
const user = require("../services/user.js");
const bcrypt = require('bcrypt');

router.get("/", async (req, res, next) => {
  try {
    res.json(await user.getUsers(req.query.page));
  } catch (err) {
    console.error(err.message);
    res.status(500).send(err.message);
  }
});

router.post("/create", async (req, res, next) => {
  try {
    const emailTaken = await user.checkValidEmail(req.body.email);
    if(emailTaken.length === 0) {
      res.json(await user.createUser(req.body));
    } else {
      res.status(400).json("Email already taken");
    }
  } catch (err) {
    console.error(err.message);
    res.status(500).send(err.message);
  }
});

router.delete("/delete/:id", async (req, res, next) => {
  try {
    res.json(await user.deleteUser(req.params.id));
  } catch (err) {
    res.status(500).send(err.message);
  }
});

router.post("/login", async (req, res, next) => {
  try {
    res.json(await user.checkLogin(req.body));
  } catch (err) {
    res.status(500).send(err.message);
  }
});

router.patch("/update", async (req, res, next) => {
  try {
    const exist = await user.existUser(req.body.id);
    if(exist.length === 1) {
      const mailCheck = await user.checkValidEmail(req.body.email);
      if(mailCheck.length === 0 || exist[0].email === req.body.email) {
        res.json(await user.update(req.body));
      } else {
        res.status(400).json("Email already taken");
      }
    } else {
      res.status(400).json("User does not exist");
    }
  } catch (err) {
    res.status(500).send(err.message);
  }
});

router.patch("/updatepasswd", async (req, res, next) => {
  try {
    if(req.body.id && req.body.passwd && req.body.newpasswd) {
      const exist = await user.existUser(req.body.id);
      if(exist.length === 1) {
        if (await bcrypt.compare(req.body.passwd, exist[0].passwdHash)) {
          const salt = await bcrypt.genSalt(10);
          req.body.passwdHash = await bcrypt.hash(req.body.newpasswd, salt);
          res.json(await user.updatepass(req.body));
        } else {
          res.status(400).json("Bad login / password");
        }
      } else {
        res.status(400).json("User does not exist");
      }
    } else {
      res.status(400).json("Missing elements");
    }
  } catch (err) {
    res.status(500).send(err.message);
  }
});

module.exports = router;