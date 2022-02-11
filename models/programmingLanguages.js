const db = require("../services/db");

async function getLanguage() {
  const query = `SELECT * FROM programming_languages`;
  const data = await db.query(query);
  return {
    data,
  };
}


async function findById(id) {
  // console.log(id)
  let query = `SELECT * FROM programming_languages where id=${id}`;
  console.log("query",query)
  let data = await db.query(query);
  return {
    data,
  };
}
//  function findById(id, result) {
//   console.log("test");
//    db.query(
//     `SELECT * FROM programming_languages where id =${id}`,
//     (err, res) => {
//       if (err) {
//         console.log("error: ", err);
//         result(err, null);
//         return;
//       }
  
//       if (res.length) {
//         console.log("found tutorial: ", res[0]);
//         result(null, res[0]);
//         return;
//       }
  
//       // not found Tutorial with the id
//       result({ kind: "not_found" }, null);
//     });
// }

module.exports = {
  getLanguage,
  findById,
};
