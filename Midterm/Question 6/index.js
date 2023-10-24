// Incorrect code
// public function loadConfig() {
//     fs.readFileSync('config.txt', 'binary', async function(err, data) {
//     return await new Buffer( data);
//     });
//     }
//     module.exports = {
//     loadConfig();
//     }

const fs = require("fs");

function loadConfig() {
  const data = fs.readFileSync("config.txt", "binary");
  return Buffer.from(data);
}

module.exports = {
  loadConfig,
};
