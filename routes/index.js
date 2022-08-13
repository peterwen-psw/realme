var express = require('express');
// const { render } = require('../app');
var router = express.Router();
var { render } = require("../tool/read");

/* GET home page. */
router.get('/', async function (req, res, next) {
  var data = await render("/html/index.html");
  console.log(data);
  res.write(data);
  res.end();
});

module.exports = router;
