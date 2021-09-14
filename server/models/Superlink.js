const mongoose = require('mongoose')


const SuperlinkSchema = new mongoose.Schema({
    urlCode: String,
    longUrl: String,
    SuperlinkSchema: String,
    date: {
        type: String,
        default: Date.now
    }
})
module.exports = mongoose.model('Superlink', SuperlinkSchema)