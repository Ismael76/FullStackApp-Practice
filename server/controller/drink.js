const router = require("express").Router();

const Drink = require("../model/drink");

router.get("/", async (req, res) => {
  try {
    const drinks = await Drink.getAll();
    console.log(drinks);
    res.status(200).json(drinks);
  } catch (err) {
    res.status(500);
    console.log("Not Working");
  }
});

router.get("/:id", async (req, res) => {
  const id = req.params.id;
  try {
    const drinks = await Drink.getCompany(id);
    res.status(200).json(drinks);
  } catch (err) {
    res.status(500);
    console.log("Not Working");
  }
});

module.exports = router;
