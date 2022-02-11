const express = require('express');
const router = express.Router();
const programmingLanguages = require('../controllers/programmingLangauges')

/* GET programming languages. */
router.get('/', programmingLanguages.programmingLanguageGet);
router.get('/id', programmingLanguages.getById);

module.exports = router;
