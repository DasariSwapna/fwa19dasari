var express = require("express");

var router = express.Router();



/* GET home page. */

router.get("/", function (req, res, next) {

  res.render("mydata", {

    title: "Dasari Swapna",

    fact: "I love to drink coffee"

  });

});



module.exports = router;