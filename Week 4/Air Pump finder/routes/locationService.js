// Add new location
app.post("/location", (req, res) => {
  const newLocation = {
    ...req.body, // Extract all properties from request body
    id: Date.now().toString(), // Generate a unique ID based on current timestamp
  };
  locations.push(newLocation);
  res.status(201).json(newLocation);
});

// Update existing location
app.post("/location/:id", (req, res) => {
  const index = locations.findIndex((loc) => loc.id == req.params.id);
  if (index === -1) {
    return res.status(404).json({ error: "Location not found" });
  }
  Object.assign(locations[index], req.body);
  res.json(locations[index]);
});

// Delete a location
app.delete("/location/:id", (req, res) => {
  const index = locations.findIndex((loc) => loc.id == req.params.id);
  if (index === -1) {
    return res.status(404).json({ error: "Location not found" });
  }
  locations.splice(index, 1);
  res.status(204).end();
});
