const express = require("express");
const app = express();

// Middleware 1
app.use((req, res, next) => {
  console.log(
    "This middleware will be executed first and upon completion, will pass the control to the next middleware"
  );
  next(); // Passes control to Middleware 2
});

// Middleware 2
app.use((req, res, next) => {
  console.log("This middleware will be executed next (after Middleware 1).");
});

app.listen(3000, () => {
  console.log("Server started on port 3000");
});
