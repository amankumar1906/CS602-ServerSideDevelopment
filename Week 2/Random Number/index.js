const express = require('express');
const path = require("path");
const app = express();

app.get('/random-number', (req, res) => {
    const randomNumber = Math.floor(Math.random() * 100) + 1;
    res.json({number: randomNumber});
});

app.use(express.static(path.join(__dirname, 'public')));

const PORT = 3000;
app.listen(PORT, () => console.log(`Server running on ${PORT}`));
