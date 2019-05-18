const port = 3000
const bodyParser = require('body-parser')
const express = require('express')
const server = express()

server.use(bodyParser.urlencoded({extended: true}))
server.use(bodyParser.json())

server.listen(port, () => {
    console.log(`Server running on port ${port}`)
})