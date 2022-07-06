const { pool } = require("../initdb");

class Drink {
  constructor(data) {
    this.name = data.name;
    this.brand = data.brand;
  }

  static getAll() {
    console.log("HEJFJFJKDSJ");
    return new Promise(async (resolve, reject) => {
      try {
        const drinkData = await pool.query("SELECT * FROM drinks;");
        const drinks = drinkData.rows.map((drink) => new Drink(drink));
        resolve(drinks);
      } catch (err) {
        reject(`Error`);
      }
    });
  }
}

module.exports = Drink;
