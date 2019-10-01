const express = require("express");
const reviewsRouter = require("./reviews/reviews-router");
const server = express();

server.use(express.json());

server.use("/reviews", reviewsRouter);

const port = process.env.PORT || 5000;
server.listen(port, () => console.log(`Server listening on ${port}`));
