const express = require("express");
const Controller = require("./controller");

// instantiate router
const router = express.Router();

// health check endpoint
router.get("/", (req, res) => {
  return res.json({ status: "Up and running" });
});

// get current prices
router.get("/prices", Controller.GetCurrentPrice);

module.exports = router;