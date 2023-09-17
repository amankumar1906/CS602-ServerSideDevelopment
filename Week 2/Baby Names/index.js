const express = require('express');
const app = express()


const API_URL = 'https://api.api-ninjas.com/v1/babynames?gender=';
const API_KEY = 'llUxbYzGNiQpblViG7TjqA==krCxWzytSH4A3LUM';
PORT = 3000


app.listen(PORT, () => console.log(`Server running on ${PORT}`))