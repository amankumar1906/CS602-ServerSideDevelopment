//Using URL module of Node.js
const url = require("url");

const givenUrl = "http://www.go.com/21/eggs/to/frank?x=44";
const parsedUrl = url.parse(givenUrl, true);
const pathParts = parsedUrl.pathname.split("/");

const numberOfEggs = parseInt(pathParts[1], 10);
const purchaser = pathParts[4];
const numberOfDaysForDelivery = parseInt(parsedUrl.query.x, 10);

// Logging the values
console.log(`Number of Eggs: ${numberOfEggs}`);
console.log(`Purchaser: ${purchaser}`);
console.log(`Number of Days for Delivery: ${numberOfDaysForDelivery}`);
