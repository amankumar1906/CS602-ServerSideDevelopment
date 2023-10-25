//Serves as Abstract Class for defining strategies

class NumberStrategy {
  filter() {
    throw new Error("Filter method not implemented");
  }
}

module.exports = NumberStrategy;
