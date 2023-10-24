const { loadConfig } = require("./index.js");

const buffer = loadConfig();
console.log(buffer.toString());
