const mongoose = require('mongoose');

const currentSchema = new mongoose.Schema({
    currentValue: {
        type: Number,
        required: true,
    },
    date: {
        type: Date,
        default: Date.now
    }
});

module.exports = mongoose.model('current', currentSchema);