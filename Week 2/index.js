const express = require("express")
const path = require("path")
const app = express();

app.use(express.json())
app.use(express.urlencoded({extended: false}))

const logger = (req,res,next) => {
    console.log(`${req.protocol}://${req.get('host')}`);
    next();
}

app.use(logger)

app.use(express.static(path.join(__dirname, 'public')))

app.use('/api/members', require('./routes/api/members'))
const PORT = process.env.PORT || 5000
app.listen(PORT, () => console.log(`Server started on ${PORT}`));
