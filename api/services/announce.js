const database = require("./database.js");

const getAd = async () => {
  return await database.query("SELECT * FROM announce");
};

const getAdById = async (id) => {
  return await database.query(
    `SELECT * FROM announce WHERE idAnnounce = ${id}`
  );
};

const createAd = async (annnounce) => {
  const result = await database.query(
    `INSERT INTO announce (title, description, max, caution, city, zipcode, cniNeeded) VALUES ('${annnounce.title}', '${annnounce.description}', '${annnounce.max}', '${annnounce.caution}', '${annnounce.city}', '${annnounce.zipcode}', '${annnounce.cniNeeded}')`
  );
  return `SUCCESS`;
};

const deleteAd = async (annnounce) => {
  `DELETE FROM announce `;
};
module.exports = { getAd, getAdById, createAd };
