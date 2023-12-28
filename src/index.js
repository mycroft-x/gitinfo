const express = require('express')
const app = express()

app.get('/', (req, res) => {
    res.send('wooop')
})

app.listen(443, () => (
    console.log('wooop')
))