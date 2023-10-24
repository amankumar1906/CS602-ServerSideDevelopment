//We need to use middleware to parse the body since response is sent in request body and not as a query.

const express = require("express");
const app = express();
const PORT = 3000;

// Middleware to parse JSON data
app.use(express.json());

app.post("/client/account", (request, response) => {
  const { data } = request.body;
  Account.save(data);
  response.send("Data has been saved successfully!");
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
