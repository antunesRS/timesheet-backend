const ts = require('./timesheet')

ts.methods(['get','post','put','delete'])
ts.updateOptions({new: true, runValidators: true})

module.exports = ts