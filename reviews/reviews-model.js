const db = require("../data/db");

module.exports = {
  get,
  getById
};

function get() {
  return db("reviews");
}

function getById(id) {
  return db("reviews")
    .where({ id })
    .first();
}
