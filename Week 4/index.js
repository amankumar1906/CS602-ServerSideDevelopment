const express = require("express");
const app = express();
const path = require("path");
const PORT = 3000;

let lastNumbers = null;

const generateNumber = () => {
  let numbers = [];
  while (numbers.length < 5) {
    const rand = Math.floor(Math.random() * 69) + 1;
    if (!numbers.includes(rand)) {
      numbers.push(rand);
    }
  }
  numbers.sort((a, b) => a - b);
  const powerball = Math.floor(Math.random() * 26) + 1;
  return { numbers, powerball };
};

app.use(express.static(path.join(__dirname, "public")));

app.get("/getNumbers", (req, res) => {
  let currentNumbers = generateNumber();
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

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
