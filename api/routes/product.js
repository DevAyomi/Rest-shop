const express = require("express");
const router = express.Router();

router.get("/", (req, res, next) => {
  res.status(200).json({
    message: "Handling GET requests to /products",
  });
});

router.post("/", (req, res, next) => {
  res.status(200).json({
    message: "Handling POST requests to /products",
  });
});

//Route to get a particular product
router.get("/:productId", (req, res, next) => {
  const id = req.params.productId;

  if (id === "special") {
    res.status(200).json({
      message: "You discovered the special ID",
      id: id,
    });
  } else {
    res.status(200).json({
      message: "You passed an id",
    });
  }
});

//Route to update or patch product
router.patch("/:productId", (req, res, next) => {
  res.status(200).json({
    message: "Updated product",
  });
});

//Route to delete product
router.delete("/:productId", (req, res, next) => {
  res.status(200).json({
    message: "Deleted product",
  });
});

module.exports = router;
