const express = require('express');
const router = express.Router();

/* GET home page. */
router.get('/', (req, res)=> {
  res.send("Hello World!!");
});
// router.use('/user', )

module.exports = router;
