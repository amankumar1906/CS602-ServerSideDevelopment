const express = require("express");
const cors = require("cors");
const app = express();
const path = require("path");
const PORT = 3001;

// Enable CORS for all routes to handle cross-origin requests
app.use(cors());
app.use(cors());

let lastNumbers = null;

// Function to generate lottery numbers
const generateNumber = () => {
  let numbers = [];
  while (numbers.length < 5) {
    const rand = Math.floor(Math.random() * 69) + 1;
    if (!numbers.includes(rand)) {
      numbers.push(rand);
    }
  }
  numbers.sort((a, b) => a - b);
  const powerball = Math.floor(Math.random() * 26) + 1; // Generate Powerball number between 1 and 26

  return { numbers, powerball };
};

app.use(express.static(path.join(__dirname, "public")));

// Route to fetch new lottery numbers
app.get("/getNumbers", (req, res) => {
  let currentNumbers = generateNumber();
  // Ensure generated numbers aren't the same as the last ones
  while (areNumbersEqual(currentNumbers, lastNumbers)) {
    currentNumbers = generateNumber();
  }
  lastNumbers = currentNumbers;
  res.json(currentNumbers);
});

const areNumbersEqual = (set1, set2) => {
  if (!set1 || !set2) return false;
  return JSON.stringify(set1) === JSON.stringify(set2);
};

// Start the server on the defined port
app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
