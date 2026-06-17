var express = require("express");
var router = express.Router();

router.get("/pizza-margherita", (req, res) => {
  res.render("pizza-margherita", { title: "Pizza Margherita" });
});

module.exports = router;
