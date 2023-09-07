const express = require("express");
const morgan = require("morgan");

const app = express();

app.use(morgan("dev"));

//Import product routes here
const productRoutes = require("./api/routes/product");
const orderRoutes = require("./api/routes/order");

app.use("/products", productRoutes);
app.use("/orders", orderRoutes);

//error handling middleware
app.use((req, res, next) => {
  const error = new Error("Not found");
  error.status = 404;
  next(error);
});

app.use((error, req, res, next) => {
  res.status(error.status || 500);
  res.json({
    error: {
      message: error.message,
    },
  });
});

module.exports = app;
