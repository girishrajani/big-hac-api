const mongoose = require('mongoose');

const ticketSchema = new mongoose.Schema({
    email: {
        required: true,
        type: String
    },
    desig: {
        required: true,
        type: String
    },
    phone: {
        required: true,
        type: String
    },
    cat: {
        required: true,
        type: String
    },
    subject: {
        required: true,
        type: String
    },
    desc: {
        required: true,
        type: String
    },
    keywords: {
        required: true,
        type: String
    }
})

module.exports = mongoose.model('Ticket', ticketSchema)
