const port = (process.env.PORT || 3000)
const bodyParser = require('body-parser')
const express = require('express')
const server = express()
const allowCors = require('./cors')

server.get('/', (req,res) => {
    res.send('Server is running')
})

server.use(bodyParser.urlencoded({extended: true}))
server.use(bodyParser.json())
server.use(allowCors)

server.listen(port, () => {
    console.log(`Server running on port ${port}`)
})

module.exports = server