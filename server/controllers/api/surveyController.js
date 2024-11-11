const Survey = require('../../models/Survey');
const User = require('../../models/User');
const fetch = require('node-fetch');
const axios = require('axios');
const Question = require('../../models/Question');

exports.create = async (req, res) => {
    const reqData = req.body;

    const locationData = await getLocationFromIP(reqData.ipAddress);

    const newSurvey = new Survey({
        fullName: reqData.fullName,
        gender: reqData.gender,
        birthday: reqData.birthday,
        ethnicity: reqData.ethnicity,
        location: locationData
    });

    newSurvey.save()
        .then(newItem => {
            res.status(201).json({ message: "Survey created successfully", data: newItem });
        })
        .catch(err => {
            console.log(err);
            res.status(500).json({ message: "Error creating survey", error: err });
        });
}

exports.update = async (req, res) => {
    const userId = req.body.userId;

    const survey = await Survey.findById(userId);

    if (!survey || survey.length === 0) {
        return res.status(404).json({ message: "Survey not found" });
    }

    const surveyData = req.body.talkingResult;

    let totalScore = 0;
    let scores = {
        "A": 0,
        "B": 0,
        "C": 0
    };

    const question = await Question.find();
    
    for (let i = 1; i <= question.length; i++) { // Adjust according to your number of questions
        const weight = Math.floor(Math.random() * 200) + 9900;
        
        const firstChoice = surveyData[`question${i}`];
        const secondChoice = surveyData[`question${i}_second`];

        if (firstChoice) {
            totalScore += 2 * weight; // Add 2 points for the first choice
            scores[firstChoice] += 2 * weight;
        }

        if (secondChoice && secondChoice !== firstChoice) {
            totalScore += 1 * weight; // Add 1 point for the second choice
            scores[secondChoice] += 1 * weight;
        }
    }

    const percentages = {
        "A": (Math.floor(scores["A"] / totalScore * 100)) || 0,
        "B": (Math.floor(scores["B"] / totalScore * 100)) || 0,
        "C": (Math.floor(scores["C"] / totalScore * 100)) || 0,
    };

    // Convert percentages object to an array of [key, value] pairs
    const entries = Object.entries(percentages);

    // Sort entries by value in descending order
    entries.sort(([, valueA], [, valueB]) => valueB - valueA);

    if (entries[0][1] === entries[1][1]) {
        entries[0][1]++;
        entries[1][1]--;
    }

    if (entries[1][1] === entries[2][1] || entries[1][1] < entries[2][1]) {
        entries[1][1]++;
        entries[2][1]--;
    }

    survey.talkingResult = req.body.talkingResult;
    survey.totalResult = entries;

    survey.save()
        .then(() => {
            res.status(200).json({ status: true, message: "Survey updated successfully", talkType: entries });
        })
        .catch(err => {
            console.log(err);
            res.status(500).json({ status: false, message: 'An error occurred during processing', talkType: [] });
        });
}

// GET route to fetch all survey entries with populated user information
exports.get = (req, res) => {
    try {
        Survey
            .find()
            .then(result => {
                return res.json(result);
            })
            .catch(err => {
                return res.json([]);
            });
    } catch (error) {
        res.status(500).json({ message: 'Server error', error: error.message });
    }
};

// GET route to fetch survey entries by userId with populated user information
exports.getByUser = async (req, res) => {
    try {
        const { userId } = req.params;
        const surveys = await Survey.find({ userId }).populate('userId', 'email firstName lastName');
        
        if (!surveys.length) {
            return res.status(404).json({ message: 'No surveys found for this user' });
        }

        res.status(200).json(surveys);
    } catch (error) {
        res.status(500).json({ message: 'Server error', error: error.message });
    }
};

async function getLocationFromIP(ipAddress) {
    try {
        const response = await axios.get(`http://ip-api.com/json/${ipAddress}`);

        return response.data;
    }
    catch (error) {
        console.error("Error fetching location data:", error);
        return null;
    }
};

exports.delete = (req, res) => {
    const id = req.params.id;

    Survey
        .findById(id)
        .then(survey => {
            if (survey) {
                survey.deleteOne();
            }
        });
}