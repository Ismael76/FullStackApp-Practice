const { pool } = require("../initdb");

class Drink {
  constructor(data) {
    this.name = data.name;
    this.brand = data.brand;
  }

  static getCompany(name) {
    return new Promise(async (resolve, reject) => {
      try {
        const drinkData = await pool.query(
          "SELECT company.name, drinks.name FROM drinks INNER JOIN company ON drinks.id = company.id WHERE company.name = $1;",
          [name]
        );

        resolve(drinkData.rows[0]);
      } catch (err) {
        reject(`Error`);
      }
    });
  }

  static getAll() {
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
