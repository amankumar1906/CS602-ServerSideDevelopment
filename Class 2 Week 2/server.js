import express from "express"
const app = express();

app.use(express.json());
app.get('/numbers/:max', (req, res) => {
    let count = parseInt(req.params.max);

    if (isNaN(count) || count < 1) {
        return res.status(400).send('Please provide a valid count.');
    }

    let numbers = [];
    for (let i = 1; i <= count; i++) {
        numbers.push(i);
    }

    res.json(numbers);
});

app.post('/colors', (req, res) => {
    let colors = req.body.colors;

    if (!colors || !Array.isArray(colors)) {
        return res.status(400).send('Please provide a valid array of colors.');
    }

    res.json(colors);
});

const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Server started on http://localhost:${PORT}`);
});
