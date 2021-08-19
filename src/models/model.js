const mongoose = require('mongoose');

const msgSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },

    email: {
        type: String,
        required: true
    }, 
    phone: {
        type: String
    },
    message: {
        type: String,
        required: true
    },
})

const Message = mongoose.model('Message', msgSchema);

module.exports = Message;