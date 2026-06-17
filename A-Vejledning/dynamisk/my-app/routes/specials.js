var express = require("express");
var router = express.Router();

const specials = require("../data/specials");

router.get("/special/:day", (req, res) => {
  const day = req.params.day.toLowerCase();
  const special = specials[day];

  if (!special) {
    return res.status(404).json({ error: "No special found" });
  }

  res.json({
    day,
    ...special
  });
});

module.exports = router;