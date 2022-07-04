const mongoose = require('mongoose');

const powerSchema = new mongoose.Schema({
    data: {
        type: String,
        required: true,
    }
});

module.exports = mongoose.model('power', powerSchema);