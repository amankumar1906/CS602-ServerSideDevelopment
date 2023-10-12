// Fetch user account info
app.get("/user/:userId", (req, res) => {
  const user = users.find((u) => u.userId == req.params.userId);
  if (!user) {
    return res.status(404).json({ error: "User not found" });
  }
  res.json(user);
});

// Create new user account
app.post("/user", (req, res) => {
  const newUser = {
    ...req.body,
    userId: Date.now().toString(),
  };
  users.push(newUser);
  res.status(201).json(newUser);
});

// Update user account info
app.post("/user/:userId", (req, res) => {
  const index = users.findIndex((u) => u.userId == req.params.userId);
  if (index === -1) {
    return res.status(404).json({ error: "User not found" });
  }
  Object.assign(users[index], req.body);
  res.json(users[index]);
});

// Delete user account
app.delete("/user/:userId", (req, res) => {
  const index = users.findIndex((u) => u.userId == req.params.userId);
  if (index === -1) {
    return res.status(404).json({ error: "User not found" });
  }
  users.splice(index, 1);
  res.status(204).end();
});
