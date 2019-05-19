const express = require('express')

module.exports = server => {
    const router = express.Router()
    server.use('/api',router)

    const tsService = require('../api/timesheet/tsSevice')
    tsService.register(router,'/ts')
}