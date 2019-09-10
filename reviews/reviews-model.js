const db = require('../data/db.js');

module.exports = {
  get,
  getById,
  insert
};

function insert(review) {
  return db('reviews')
    .insert(review)
    .then(([id]) => getById(id));
}

function get({ limit, sortBy, sortDir = 'DESC' }) {
  return db('reviews')
    .orderBy(sortBy, sortDir)
    .limit(parseInt(limit, 10));
  let query = db('reviews'); // 'select * from reviews'
  if (sortBy) {
    query = query.orderBy(sortBy, sortDir); // 'select * from reviews ORDER BY ${sortBy} ${sortDir}'
  }
  if (limit) {
    query = query.limit(parseInt(limit, 10)); // '... LIMIT ${limit}'
  }
  return query;
}

function getById(id) {
  return db('reviews').where({ id }).first();
}
