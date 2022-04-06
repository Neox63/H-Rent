const database = require("./database.js");

const getAnnounces = async (page = 1) => {
  return await database.query("SELECT * FROM announce");
};

const createAnnonce = async (annnounce) => {
  const result = await database.query(
    `INSERT INTO annonce (title, desc, postalCode, max, caution) VALUES (${annnounce.title}, ${annnounce.desc}, ${annnounce.postalCode}, ${annnounce.max}, ${annnounce.caution});`
  );
  return "SUCCESS";
};

module.exports = { getAnnounces, createAnnonce };
