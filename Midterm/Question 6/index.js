// Incorrect code
// public function loadConfig() {
//     fs.readFileSync('config.txt', 'binary', async function(err, data) {
//     return await new Buffer( data);
//     });
//     }
//     module.exports = {
//     loadConfig();
//     }

//Corrected Code
const fs = require("fs");

function loadConfig() {
  try {
    const data = fs.readFileSync("config.txt", "binary");
    return Buffer.from(data);
  } catch (err) {
    console.error("Error reading config file:", err);
    return null;
  }
}

module.exports = {
  loadConfig,
};
