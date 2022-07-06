const router = require("express").Router();

const Drink = require("../model/drink");

router.get("/", async (req, res) => {
  try {
    const drinks = await Drink.getAll();
    res.status(200), json({ data: drinks });
  } catch (err) {
    res.status(500);
  }
});

module.exports = router;
