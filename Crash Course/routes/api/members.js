const express = require('express')
const router = express.Router();
const members = require('../../Members.js');
const uuid = require("uuid")

router.get('/:id', (req,res) => {
    const found = members.some(members => members.id === parseInt(req.params.id))
    if (found){
    res.json(members.filter(member => member.id === parseInt(req.params.id)))  //req.params.id returns a string
    }
    else{
        res.status(400).json({msg:'Member not found'})
    }
})
router.get('/', (req,res) => {
    res.json(members)
})

router.post('/', (req,res) => {
    const newMember = {
        id: uuid.v4(),
        name: req.body.name,
        email: req.body.email,
        status: 'active'
    }

    members.push(newMember)
    res.json(members)
})
module.exports = router