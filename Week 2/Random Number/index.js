const express = require('express')
const app = express()


app.get('/', (req,res) => {
    const randomNumber = Math.floor(Math.random())
    res.json({number: randomNumber})
})

PORT = 3000
app.listen(PORT, () => console.log(`Server running on ${PORT}`))
