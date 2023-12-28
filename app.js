const express = require('express')
const cors = require('cors')
const app = express()
const port = process.env.PORT || 5000;

app.get('/', (req, res) => {
    res.status(200)
    res.send('wooop')
    console.log("cweknc");
    res.end()
})
app.get('/gitinfo/', (req, res) => {
    res.status(200)
    res.send('wooop')
    console.log("cewnec");
    res.end()
})

module.exports = app