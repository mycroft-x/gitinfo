const express = require('express')
const app = express()
const port = process.env.PORT || 5000;

app.use(express.static(`public/`));
app.use(express.json());

app.get('/', (req, res) => {
    res.status(200)
    res.send('wooop')
})

app.get('/home', (req, res) => {
    res.status(200)
    res.sendFile(`${__dirname}/public/home.html`)
})

app.get('/index.css', (req, res) => {
    res.status(200)
    res.sendFile(`${__dirname}/src/styles/index.css`)
})

app.get('/home.css', (req, res) => {
    res.status(200)
    res.sendFile(`${__dirname}/src/styles/home.css`)
})

app.get('/main-home.css', (req, res) => {
    res.status(200)
    res.sendFile(`${__dirname}/src/styles/main-home.css`)
})

app.get('/home.js', (req, res) => {
    res.status(200)
    res.sendFile(`${__dirname}/src/home.js`)
})

app.get('/search.js', (req, res) => {
    res.status(200)
    res.sendFile(`${__dirname}/src/search.js`)
})

app.get('/not-found', (req, res) => {
    res.status(200)
    res.sendFile(`${__dirname}/src/not-found.html`)
})

app.listen(port, () => {
    console.log("I'm alive");
})