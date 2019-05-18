const restful = require('node-restful')
const mongoose = restful.mongoose

const tsSchema = new mongoose.Schema({
    monthDay: {type: String, required: true},
    weekDay: {type: String, required: true},
    beginTime: {type: String, required: true},
    lunchBeginTime: {type: String, required: true},
    lunchEndTime: {type: String, required: true},
    endTime: {type: String, required: true},
    description: {type: String, required: true}
})

module.exports = restful.model('WorkingDay', tsSchema)