const database = require("./database.js");
const picture = require('./picture');

const getDocuments = async (page = 1) => {
    return await database.query("SELECT * FROM document");
  };

module.exports = { getDocuments };