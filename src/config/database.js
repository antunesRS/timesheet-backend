const mongoose = require('mongoose')
mongoose.Promise = global.Promise

const url = process.env.MONGOLAB_URI? process.env.MONGOLAB_URI : 'mongodb://localhost/timesheet'
module.exports = mongoose.connect(url)