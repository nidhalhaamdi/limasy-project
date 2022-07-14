const mongoose = require('mongoose');

const line3Schema = new mongoose.Schema({
    data: {
        type: String,
        required: true,
    }
});

module.exports = mongoose.model('line3', line3Schema);