//Using Express to obtain the values
//GET request at  http://localhost:3000/21/eggs/to/frank?x=44 will give the necessary output

const express = require("express");
const app = express();

app.get("/:numberOfEggs/eggs/to/:purchaser", (req, res) => {
  const numberOfEggs = parseInt(req.params.numberOfEggs, 10);
  const purchaser = req.params.purchaser;

  const numberOfDaysForDelivery = parseInt(req.query.x, 10);
  res.send({
    numberOfEggs,
    purchaser,
    numberOfDaysForDelivery,
  });
});

app.listen(3000, () => {
  console.log("Server is running on http://localhost:3000");
});
