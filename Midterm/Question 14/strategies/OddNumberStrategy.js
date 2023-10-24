const NumberStrategy = require("./NumberStrategy");

class OddNumberStrategy extends NumberStrategy {
  filter(numbers) {
    return numbers.filter((n) => n % 2 !== 0);
  }
}

module.exports = OddNumberStrategy;
