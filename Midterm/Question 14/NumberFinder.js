class NumberFinder {
  constructor(strategy) {
    this.strategy = strategy;
  }

  setStrategy(strategy) {
    this.strategy = strategy;
  }

  findNumbers(array) {
    return this.strategy.filter(array);
  }
}

module.exports = NumberFinder;
