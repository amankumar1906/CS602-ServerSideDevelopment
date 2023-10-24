const express = require("express");
const transactionRoutes = require("./services/transaction/TransactionService.js");

const app = express();
const PORT = 3000;

app.use(transactionRoutes);

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
