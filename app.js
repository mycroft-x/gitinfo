const express = require('express')
const app = express()
const port = process.env.PORT || 5000;

app.use(express.static(__dirname + '/public/'));
app.use(express.json());

app.get('/', (req, res) => {
    res.status(200)
    res.send('wooop')
    console.log("cweknc");
})

app.get('/index.csss', (req, res) => {
    res.status(200)
    res.sendFile(__dirname + '/src/styles/index.css')
})

app.listen(port, () => {
    console.log("I'm alive");
})