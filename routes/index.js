var express = require("express");
var router = express.Router();

const messages = [
  { test: "Hi there!", user: "Amando", added: new Date() },
  { test: "Hello World!", user: "Charles", added: new Date() },
];

/* GET home page. */
router.get("/", function (req, res, next) {
  res.render("index", { title: "Express" });
});

module.exports = router;
