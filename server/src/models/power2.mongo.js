const mongoose = require('mongoose');

const line2Schema = new mongoose.Schema({
    data: {
        type: String,
        required: true,
    }
});

module.exports = mongoose.model('line2', line2Schema);