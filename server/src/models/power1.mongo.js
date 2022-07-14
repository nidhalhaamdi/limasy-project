const mongoose = require('mongoose');

const line1Schema = new mongoose.Schema({
    data: {
        type: String,
        required: true,
    }
});

module.exports = mongoose.model('line1', line1Schema);