const Question = require('../../models/Question');

const isEmpty = require('../../config/isEmpty');

const config = require('../../config/config');

exports.get = (req, res) => {
    Question
        .find()
        .then(questions => {
            const result = { status: true, data: questions, type: config.types.success };
            return res.json(result);
        })
        .catch(err => {
            const result = { status: false, message: config.messages.dealError, type: config.types.error };
            return res.json(result);
        });
};

exports.create = async (req, res) => {
    var data = req.body;
    
    if (isEmpty(data) || isEmpty(data.title) || isEmpty(data.choices)) {
        const result = { status: false, message: config.messages.isEmpty, type: config.types.error };
        return res.json(result);
    }

    const currentQuestion = await Question.find();
    const number = currentQuestion ? currentQuestion.length + 1 : 1;

    const question = new Question({
        type: 'radiogroup',
        name: `question${number}`,
        title: data.title,
        choices: data.choices
    });

    question
        .save()
        .then(() => {
            const result = { status: true, message: config.messages.createSuccess, type: config.types.success };
            return res.json(result);
        })
        .catch(err => {
            console.log(err);
            const result = { status: false, message: config.messages.dealError, type: config.types.error };
            return res.json(result);
        });
};

exports.update = (req, res) => {
    const id = req.params.id;
    const data = req.body;
    if (isEmpty(data) || isEmpty(data.title) || isEmpty(data.choices)) {
        const result = { status: false, message: config.messages.isEmpty, type: config.types.error };
        return res.json(result);
    }

    Question
        .findById(id)
        .then(question => {
            if (question) {
                question.title = data.title;
                question.choices = data.choices;

                question
                    .save()
                    .then(() => {
                        const result = { status: true, message: config.messages.updateSuccess, type: config.types.success };
                        return res.json(result);
                    })
                    .catch(err => {
                        console.log(err);
                        const result = { status: false, message: config.messages.dealError, type: config.types.error };
                        return res.json(result);
                    });
            }
            else {
                const result = { status: false, message: config.messages.foundError, type: config.types.error };
                return res.json(result);
            }
        })
        .catch(err => {
            console.log(err);
            const result = { status: false, message: config.messages.dealError, type: config.types.error };
            return res.json(result);
        });
};