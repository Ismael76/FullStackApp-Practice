const router = require("express").Router();

const Drink = require("../model/drink");

router.get("/", async (req, res) => {
  try {
    const drinks = await Drink.getAll();

    console.log(drinks);
    res.status(200).json({ data: drinks });
  } catch (err) {
    res.status(500);
    console.log("Not Working");
  }
});

module.exports = router;
