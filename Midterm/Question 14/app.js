// We define a number of algorithms that can be interchanged on the fly. In my case it is Even/Odd filtering.
// 'NumberFinder' basically delegates its number-finding behavior to the current strategy
// The even and odd strategies use a common interface NumberFinder.js
// We can dynamically change strategies using 'setStrategy'
// This is how Strategy Design Pattern is implemented.

const NumberFinder = require("./NumberFinder");
const EvenNumberStrategy = require("./strategies/EvenNumberStrategy");
const OddNumberStrategy = require("./strategies/OddNumberStrategy");

const numbers = [1, 2, 3, 4, 5, 6, 7, 8];
const finder = new NumberFinder(new EvenNumberStrategy());
console.log(finder.findNumbers(numbers));

finder.setStrategy(new OddNumberStrategy());
console.log(finder.findNumbers(numbers));
