const mongoose = require('mongoose');

const QuestionSchema = new mongoose.Schema({
    type: {
        type: String,
        required: true
    },
    name: {
        type: String,
        required: true,
    },
    title: {
        type: String,
        required: true,
    },
    choices: {
        type: Array,
        required: true,
    },
});

module.exports = new mongoose.model('questions', QuestionSchema);