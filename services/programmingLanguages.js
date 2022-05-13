const db = require("../services/db");

async function getLanguage() {
  const query = `SELECT * FROM programming_languages`;
  const data = await db.query(query);
  return {
    data,
  };
}

async function findById(id) {
  let query = `SELECT * FROM programming_languages where id=${id.id}`;
  let data = await db.query(query);
  return {
    data,
  };
}

async function deleteId(id) {
  let query = `Delete FROM programming_languages where id=${id.id}`;
  let data = await db.query(query);
  return {
    data,
  };
}

async function postLanguages(body) {
  console.log(body)
  let query = `INSERT INTO programming_languages(id, name, released_year, githut_rank,pypl_rank, tiobe_rank) 
  VALUES 
  (${body.id}, ${body.name}, ${body.released_year}, ${body.githut_rank}, ${body.pypl_rank}, ${body.tiobe_rank})`;
  console.log("query", query);
  let data = await db.query(query);
  return {
    data,
  };
}

module.exports = {
  getLanguage,
  findById,
  deleteId,
  postLanguages,
};
