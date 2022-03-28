const database = require("./database.js");
const bcrypt = require('bcrypt');

const getUsers = async (page = 1) => {
  return await database.query("SELECT * FROM User");
};

const createUser = async (user) => {
  const salt = await bcrypt.genSalt(10);
  user.passwdHash = await bcrypt.hash(user.passwdHash, salt);
  const alreadyTaken = await database.query(`SELECT * FROM User WHERE email="${user.email}"`);
  if(alreadyTaken.length === 0) {
    const result = await database.query(
        `INSERT INTO User (firstname, lastname, email, passwdHash,registeredAt) VALUES ("${user.firstname}", "${user.lastname}", "${user.email}", "${user.passwdHash}",NOW())`
    );
    return "SUCCESS";
  } else {
    return "Email already taken";
  }
};

const deleteUser = async (id) => {
  const result = await database.query(`DELETE FROM User WHERE idUser="${id}"`);
  return result.affectedRows ? "SUCCESS" : "Oops, something went wrong";
};

const checkLogin = async(user) => {
  if(user.email && user.passwd) {
    const result = await database.query(`SELECT passwdHash FROM User WHERE email="${user.email}"`);
    if(result.length !== 0) {
      if(await bcrypt.compare(user.passwd, result[0].passwdHash)) {
        return "Logged In";
      } else {
        return "Bad login / password";
      }
    } else {
      return "Bad login / pass";
    }
  } else {
    return "Missing elements";
  }
};

module.exports = { getUsers, createUser, deleteUser, checkLogin };
