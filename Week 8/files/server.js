const express = require("express");
const { IncomingForm } = require("formidable");
const fs = require("fs-extra");
const path = require("path");
const app = express();
const PORT = 3000;

app.use(express.static("public"));

app.post("/upload", (req, res) => {
  const form = new IncomingForm();

  form.parse(req, (err, fields, files) => {
    if (err) {
      console.error("Error parsing the files", err);
      return res.status(500).send("Error parsing the files");
    }

    const file = files.filetoupload;
    if (!file) {
      return res.status(400).send("No file uploaded.");
    }

    // Use the 'path' from the file object directly
    const oldPath = file.path;
    const newPath = path.join(__dirname, "uploads", file.name);

    // Ensure the uploads directory exists
    fs.ensureDirSync(path.join(__dirname, "uploads"));

    // Read the old file and prepend the audit text
    fs.readFile(oldPath, (err, data) => {
      if (err) {
        console.error("Error reading the file", err);
        return res.status(500).send("Error reading the file");
      }
      const auditText = "This is an audit copy of the source document\n";
      const newData = Buffer.concat([Buffer.from(auditText), data]);

      // Write the new data to a new file
      fs.writeFile(newPath, newData, (err) => {
        if (err) {
          console.error("Error writing the new file", err);
          return res.status(500).send("Error writing the new file");
        }
        res.send("File uploaded and modified!");
      });
    });
  });
});

app.listen(PORT, () => {
  console.log(`Server is running at http://localhost:${PORT}`);
});
