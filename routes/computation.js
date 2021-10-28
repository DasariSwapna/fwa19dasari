var express = require("express");
var router = express.Router();
var rno;
var fround;
var random;
var round;

/* GET users listing. */

router.get("/", function (req, res, next) {
  rno = Math.random() * (100 - 1) + 1;
  rno1 = Math.random() * (100 - 1) + 1;

  fround = Math.fround(rno, rno1);

  random = Math.random(rno);

  round = Math.round(rno);

  res.send(`(fround) applied to (${rno}, ${rno1}) is ${fround} <br>

            (random) applied to (${rno}) is ${random} <br>

            (round) applied to (${rno}) is ${round}`);
});

module.exports = router;