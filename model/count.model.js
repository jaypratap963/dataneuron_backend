const mongoose = require('mongoose')

const countSchema = new mongoose.Schema({
    count: { type: Number, default: 0 }
}, {
    timestamps: true
})

const countModel = mongoose.model('count', countSchema)

module.exports = countModel