const programmingLanguages = require("../services/programmingLanguages");

exports.programmingLanguageGet = async (req, res, next) => {
  try {
    const { data } = await programmingLanguages.getLanguage();
    res.json(data);
  } catch (err) {
    console.error(`Error while getting programming languages `, err.message);
    next(err);
  }
};
// Find a single language by Id
exports.getById = async (req, res, next) => {
  try {
    let data = await programmingLanguages.findById(req.query);
    // console.log("data", data);
    res.json(data);
  } catch (err) {
    console.error(`Error while getting programming languages `, err.message);
    next(err);
  }
};

// Delete a single language by Id
exports.deleteById = async (req, res, next) => {
  try {
    let data = await programmingLanguages.deleteId(req.query);
    // console.log("data", data);
    res.json(data);
  } catch (err) {
    console.error(`Error while getting programming languages `, err.message);
    next(err);
  }
};
// POST a new language
exports.postProgrammingLanguages = async (req, res, next) => {
  try {
    let data = await programmingLanguages.postLanguages(req.body);
    console.log("data", data);
    res.json(data);
  } catch (err) {
    console.error(`Error while getting programming languages `, err.message);
    next(err);
  }
};
