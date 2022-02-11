const programmingLanguages = require("../models/programmingLanguages");

exports.programmingLanguageGet = async (req, res, next) => {
  try {
    const { data } = await programmingLanguages.getLanguage();
    res.json(data);
  } catch (err) {
    console.error(`Error while getting programming languages `, err.message);
    next(err);
  }
};

exports.getById = async (req, res, next) => {
  try {
    // const id=req.query;
    // console.log("id:",id)
    let data = await programmingLanguages.findById(req.query);
    console.log("data", data);
    res.json(data);
  } catch (err) {
    console.error(`Error while getting programming languages `, err.message);
    next(err);
  }
};
// Find a single Tutorial by Id
// exports.getById = (req, res) => {
//   console.log(res.send(req.params.id))
//    programmingLanguages.findById(req.params.id, (err, data) => {
//     if (err) {
//       if (err.kind === "not_found") {
//         res.status(404).send({
//           message: `Not found Tutorial with id ${req.params.id}.`
//         });
//       } else {
//         res.status(500).send({
//           message: "Error retrieving Tutorial with id " + req.params.id
//         });
//       }
//     } else res.send(data);
//   });
// };
