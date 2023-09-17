const express = require("express");
const bodyParser = require("body-parser");
const request = require("request");
const path = require("path");

const app = express();
app.use(bodyParser.json());

app.use(express.static(path.join(__dirname, "public")));

const PORT = 3000;
const API_URL = "https://api.api-ninjas.com/v1/babynames?gender=";
const API_KEY = "llUxbYzGNiQpblViG7TjqA==krCxWzytSH4A3LUM";

const likedNames = [];

app.get("/liked-names", (req, res) => {
  res.json(likedNames);
});

app.post("/new-names", (req, res) => {
  const gender = req.body.gender;

  request.get(
    {
      url: `${API_URL}${gender}`,
      headers: {
        "X-Api-Key": API_KEY,
      },
    },
    function (error, response, body) {
      if (error) {
        console.error("Request failed:", error);
        res.status(500).send("Internal Server Error");
      } else if (response.statusCode !== 200) {
        console.error("Error:", response.statusCode, body);
        res.status(response.statusCode).send(body);
      } else {
        const data = JSON.parse(body);
        const newNames = data.slice(0, 5);
        res.json(newNames);
      }
    }
  );
});

app.post("/like-name", (req, res) => {
  const { name } = req.body;
  if (!likedNames.includes(name)) {
    likedNames.push(name);
  }
  res.json({ status: "success" });
});

app.listen(PORT, () => console.log(`Server running on ${PORT}`));
