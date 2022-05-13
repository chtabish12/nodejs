const express = require('express');
const router = express.Router();
const programmingLanguages = require('../controllers/programmingLangauges')

/* GET programming languages. */
router.get('/', programmingLanguages.programmingLanguageGet);
router.post('/', programmingLanguages.postProgrammingLanguages);
router.get('/id', programmingLanguages.getById);
router.delete('/id', programmingLanguages.deleteById);

module.exports = router;
