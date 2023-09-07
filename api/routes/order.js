const express = require("express");

const routes = express.Router();

routes.get("/", (req, res, next) => {
  res.status(200).json({
    message: "Get all orders",
  });
});

routes.post("/", (req, res, next) => {
  res.status(201).json({
    message: "Post an order",
  });
});

routes.get("/:orderId", (req, res, next) => {
  res.status(200).json({
    message: "Get an order",
  });
});

routes.patch("/:orderId", (req, res, next) => {
  res.status(200).json({
    message: "Update an order",
  });
});

routes.delete("/:orderId", (req, res, next) => {
  res.status(200).json({
    message: "Delete an order",
  });
});

module.exports = routes;
