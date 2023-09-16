const express = require("express")
const path = require("path")
const members = require('./Members.js')

const app = express();

const logger = (req,res,next) => {
    console.log(`${req.protocol}://${req.get('host')}`);
    next();
}

app.use(logger)

app.get('/api/members/:id', (req,res) => {
    const found = members.some(members => members.id === parseInt(req.params.id))
    if (found){
    res.json(members.filter(member => member.id === parseInt(req.params.id)))  //req.params.id returns a string
    }
    else{
        res.status(400).json({msg:'Member not found'})
    }
})
app.get('/api/members', (req,res) => {
    res.json(members)
})

app.use(express.static(path.join(__dirname, 'public')))

const PORT = process.env.PORT || 5000
app.listen(PORT, () => console.log(`Server started on ${PORT}`));
