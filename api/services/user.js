const database = require("./database.js");
const bcrypt = require('bcrypt');

const getUsers = async () => {
  return await database.query("SELECT * FROM User");
};

const checkValidEmail = async(email) => {
  return await database.query(`SELECT * FROM User WHERE email="${email}"`);
};

const createUser = async (user) => {
  const salt = await bcrypt.genSalt(10);
  passwdHash = await bcrypt.hash(user.passwd, salt);
  const result = await database.query(
      `INSERT INTO User (firstname, lastname, email, passwdHash,registeredAt,city,zipcode) VALUES ("${user.firstname}", "${user.lastname}", "${user.email}", "${passwdHash}",NOW(),"${user.city}","${user.zipcode}")`
  );
  return result.affectedRows ? "SUCCESS" : "Oops, something went wrong";
};

const deleteUser = async (id) => {
  const result = await database.query(`DELETE FROM User WHERE idUser="${id}"`);
  return result.affectedRows ? "SUCCESS" : "Oops, something went wrong";
};

const checkLogin = async(user) => {
  if(user.email && user.passwd) {
    if(result.length !== 0) {
      if(await bcrypt.compare(user.passwd, result.passwdHash)) {
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

const existUser = async(id) => {
  return await database.query(`SELECT * FROM User WHERE idUser="${id}"`);
};

const update = async(user) => {
  if(user.email && user.id && user.firstname && user.lastname) {
    const result = await database.query(`UPDATE User SET firstname="${user.firstname}",lastname="${user.lastname}",email="${user.email}",city="${user.city}",zipcode="${user.zipcode}" WHERE idUser="${user.id}"`);
    return result.affectedRows ? "SUCCESS" : "Oops, something went wrong";
  } else {
    return "Missing elements";
  }
};

const updatepass = async(user) => {
  const result = await database.query(`UPDATE User SET passwdHash = "${user.passwdHash}" WHERE idUser="${user.id}"`);
  return result.affectedRows ? "SUCCESS" : "Oops, something went wrong";
}

module.exports = { getUsers, createUser, deleteUser, checkLogin, update,updatepass, existUser,checkValidEmail };
