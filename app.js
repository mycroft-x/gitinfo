const express = require('express')
const app = express()

app.get('/', (req, res) => {
    res.status(404)
    res.send('wooop')
    console.log("cweknc");
    res.end()
})
app.get('/gitinfo/', (req, res) => {
    res.status(404)
    res.send('wooop')
    console.log("cewnec");
    res.end()
})

app.listen(443, () => (
    console.log('woooddddp')
))
app.listen(3000, () => (
    console.log('wooowwwep')
))

app.listen(80, () => (
    console.log('wooeeeeop')
))