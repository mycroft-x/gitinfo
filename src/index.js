const express = require('express')
const app = express()

app.get('/', (req, res) => {
    res.status(404)
    res.send('wooop')
    res.end()
})
app.get('/gitinfo/', (req, res) => {
    res.status(404)
    res.send('wooop')
    res.end()
})

app.listen(443, () => (
    console.log('wooop')
))
app.listen(3000, () => (
    console.log('wooop')
))

app.listen(80, () => (
    console.log('wooop')
))