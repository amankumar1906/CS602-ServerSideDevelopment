const express = require("express");
const router = express.Router();

// GET service
router.get("/services", (req, res) => {
  const response = generateResponse();
  res.json(response);
});

// POST service
router.post("/services", (req, res) => {
  const response = generateResponse();
  res.json(response);
});

function generateResponse() {
  return {
    timestamp: new Date().toISOString(),
    TID: Math.floor(Math.random() * 10000) + 1,
  };
}

module.exports = router;
