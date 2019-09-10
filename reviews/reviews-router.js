const express = require('express');
const router = express.Router();
const Reviews = require('./reviews-model.js');

router.get('/', (req, res) => {
  console.log(req.query);
  const { limit, sortBy, sortDir } = req.query;
  Reviews.get({ limit, sortBy, sortDir })
    .then(reviews => {
      res.status(200).json(reviews);
    })
    .catch(err => {
      console.log(err);
      res.status(500).json({
        err: "Error fetching reviews",
        message: err.message
      });
    });
});

router.post('/', (req, res) => {
  const { rating, comment, user_id, book_id } = req.body;
  Reviews.insert({ rating, comment, user_id, book_id })
    .then(review => {
      res.status(201).json(review);
    })
    .catch(err => {
      console.log(err);
      res.status(500).json({
        err: "Error inserting review",
        message: err.message
      });
    });
});

router.get('/:id', (req, res) => {
  const { id } = req.params;
  Reviews.getById(id)
    .then(review => {
      if (review) {
        res.status(200).json(review);
      } else {
        res.status(404).json({error: "Review with id does not exist"});
      }
    })
    .catch(err => {
      console.log(err);
      res.status(500).json({
        err: "Error fetching review",
        message: err.message
      });
    });
});


module.exports = router;
