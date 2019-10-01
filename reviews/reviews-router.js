const express = require("express");
const router = express.Router();
const Reviews = require("./reviews-model");

router.get("/", (req, res) => {
  Reviews.get()
    .then(reviews => {
      res.status(200).json(reviews);
    })
    .catch(error => {
      console.log("check reviews.get", error);
      res.status(500).json({
        error: "error fetching reviews",
        message: err.message
      });
    });
});

router.get("/:id", (req, res) => {
  const { id } = req.params;
  Reviews.getById(id)
    .then(review => {
      res.status(200).json(review);
    })
    .catch(error => {
      console.log("check review getbyid: ", error);
      res.status(500).json({
        error: "Error getting review",
        message: error.message
      });
    });
});
module.exports = router;
