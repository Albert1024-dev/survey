const { required } = require('joi');
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const SurveySchema = new Schema({
    fullName: {
        type: String,
        required: true
    },
    gender: {
        type: String,
        enum: ['male', 'female', 'other'],
        required: true
    },
    birthday: {
        type: Date,
        required: true
    },
    ethnicity: {
        type: String,
        required: true
    },
    location: {
        type: Object,
        required: true
    },
    talkingResult: {
        type: Object,
    },
    totalResult: {
        type: Object,
    },
    created_at: {
        type: Date,
        default: Date.now
    }
});

module.exports = mongoose.model('surveys', SurveySchema);
