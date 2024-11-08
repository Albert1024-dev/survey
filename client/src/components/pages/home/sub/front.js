import React, { useState, useEffect } from 'react';
import * as Survey from 'survey-react-ui';
import 'survey-core/modern.min.css';
import axios from 'axios';
// import questionList from './questions'; // Import the question list
import ethnicityData from '../../../../config/ethnicity'; // Assuming this file contains ethnicity options
import {
    Container,
    TextField,
    MenuItem,
    Button,
    Typography,
    // Snackbar,
    Alert,
} from '@mui/material';

import { useNavigate } from 'react-router-dom';

import config from '../../../../config/config';

import PieArcLabel from './overview';

const SurveyComponent = () => {
    const [questionList, setQuestionList] = useState([]);
    useEffect(() => {
        axios
            .get(config.serverURL + '/api/question')
            .then(result => {
                setQuestionList(result.data.data);
            });
    }, []);

    const [isCompleted, setIsCompleted] = useState(false);
    const [userInfo, setUserInfo] = useState({
        fullName: '',
        gender: '',
        birthday: '',
        ethnicity: ''
    });
    const [userId, setUserId] = useState(null);
    const [error, setError] = useState('');
    const [talkType, setTalkType] = useState([]);
    const [talkTypeText, setTalkTypeText] = useState('');

    // Handle input change for user info
    const handleChange = (e) => {
        const { name, value } = e.target;
        setUserInfo((prev) => ({ ...prev, [name]: value }));
    };

    // Validate user input
    const validateUserInfo = () => {
        const { fullName, gender, birthday, ethnicity } = userInfo;
        return fullName && gender && birthday && ethnicity;
    };

    // Handle user info submission
    const handleUserInfoSubmit = async (e) => {
        e.preventDefault();
        if (!validateUserInfo()) {
            setError('All fields are required.');
            return;
        }
        setError('');

        try {
            const ipres = await fetch('https://api.ipify.org?format=json');
            const data = await ipres.json();
            userInfo.ipAddress = data.ip;
            const response = await axios.post(config.serverURL + '/api/survey/user', userInfo);
            setUserId(response.data.data._id);
        } catch (error) {
            console.error("Error submitting user info:", error);
            alert("There was an error submitting your information.");
        }
    };

    // Create survey structure using the imported question list
    const surveyJSON = {
        title: "Two-Step Choice Survey",
        pages: questionList.map((question, i) => ({
            name: `page${i + 1}`,
            elements: [
                {
                    type: "panel",
                    name: `panel${i + 1}`,
                    title: question.title,
                    elements: [
                        {
                            type: "radiogroup",
                            name: question.name,
                            title: "Select one of the following options:",
                            enableHtml: false,
                            choices: question.choices.map(choice => ({
                                value: choice.value,
                                text: JSON.stringify(choice.text) // Format choices.text as a list
                            })),
                            isRequired: true // Require this question to be answered
                        }
                    ]
                },
                {
                    type: "panel",
                    name: `${question.name}_second`,
                    title: `${question.title} (Choose one remaining option)`,
                    elements: [
                        {
                            type: "radiogroup",
                            name: `${question.name}_second`,
                            title: "Select one of the remaining options:",
                            choices: question.choices.map(choice => ({
                                value: choice.value,
                                text: JSON.stringify(choice.text) // Format choices.text as a list
                            })),
                            visibleIf: `{${question.name}} notempty`, // Show this question if the main question is answered
                            isRequired: true // Require this question to be answered
                        }
                    ]
                }
            ]
        }))
    };
    const surveyModel = new Survey.Model(surveyJSON);

    surveyModel.onAfterRenderQuestion.add(function (survey, options) {
        if (options.question.name.indexOf("question") >= 0) {
            var svStringViewer = document.getElementsByClassName('sv-item__control-label');
            for (let i = 0; i < svStringViewer.length; i++) {
                var textList = svStringViewer[i].getElementsByClassName('sv-string-viewer')[0].innerHTML;
                var textArray = JSON.parse(textList);
                var ul = document.createElement('ul');
                for (let j = 0; j < textArray.length; j++) {
                    var li = document.createElement('li');
                    ul.append(li);
                    li.innerText = textArray[j];
                }
                
                svStringViewer[i].getElementsByClassName('sv-string-viewer')[0].style.display = 'none';
                if (svStringViewer[i].getElementsByTagName('ul').length === 0)
                    svStringViewer[i].append(ul);
            }
        }
    });

    // Update the choices for the second question based on the first question's selection
    surveyModel.onValueChanged.add((sender, options) => {
        for (let i = 0; i < questionList.length; i++) {
            const firstQuestion = questionList[i].name;
            const secondQuestion = `${firstQuestion}_second`;
            const selectedValue = sender.data[firstQuestion];

            if (selectedValue) {
                const remainingChoices = questionList[i].choices.filter(choice => choice.value !== selectedValue);
                const secondQuestionModel = surveyModel.getQuestionByName(secondQuestion);
                secondQuestionModel.choices = remainingChoices.map(choice => ({
                    value: choice.value,
                    text: JSON.stringify(choice.text) // Format choices.text as a list
                }));
            }
        }
    });

    // Handle survey completion and send data to the backend
    const handleSurveyComplete = async (sender) => {
        const surveyData = sender.data;
        
        try {
            const response = await axios.post(config.serverURL + '/api/survey', {
                userId: userId,
                talkingResult: surveyData
            });
            setTalkType(response.data.talkType);
            const tempArray = response.data.talkType.map(([key]) => key);
            setTalkTypeText(tempArray.join(''));
            setIsCompleted(true);
            setTimeout(() => navigate('/'), 5000);
        } catch (error) {
            console.error("Error submitting survey:", error);
            alert("There was an error submitting your survey.");
        }
    };

    surveyModel.onComplete.add(handleSurveyComplete);

    const navigate = useNavigate();

    const goBack = () => {
        navigate('/');
    }

    return (
        <Container maxWidth="sm">
            {userId ? (
                <div>
                    {isCompleted ? (
                        <Typography variant="h5" align="center">
                            Thank you for completing the survey!
                            <br />
                            Your Talk Type is
                            < br />
                            <div style={{ 'fontSize': '20px'}}>{talkTypeText}</div>
                            <PieArcLabel data={talkType} />
                        </Typography>
                    ) : (
                        <Survey.Survey model={surveyModel} />
                    )}
                </div>
            ) : (
                    <div>
                        <Typography variant="h5" align="center">User Information</Typography>
                        <form onSubmit={handleUserInfoSubmit}>
                            <TextField
                                fullWidth
                                margin="normal"
                                label="Full Name"
                                name="fullName"
                                value={userInfo.fullName}
                                onChange={handleChange}
                                required
                            />
                            <TextField
                                select
                                fullWidth
                                margin="normal"
                                label="Gender"
                                name="gender"
                                value={userInfo.gender}
                                onChange={handleChange}
                                required
                            >
                                <MenuItem value=""><em>Select...</em></MenuItem>
                                <MenuItem value="male">Male</MenuItem>
                                <MenuItem value="female">Female</MenuItem>
                                <MenuItem value="other">Other</MenuItem>
                            </TextField>
                            <TextField
                                fullWidth
                                margin="normal"
                                label="Birthday"
                                type="date"
                                name="birthday"
                                value={userInfo.birthday}
                                onChange={handleChange}
                                InputLabelProps={{ shrink: true }}
                                required
                            />
                            <TextField
                                select
                                fullWidth
                                margin="normal"
                                label="Ethnicity"
                                name="ethnicity"
                                value={userInfo.ethnicity}
                                onChange={handleChange}
                                required
                            >
                                <MenuItem value=""><em>Select...</em></MenuItem>
                                {ethnicityData.map(ethnicity => (
                                    <MenuItem key={ethnicity.value} value={ethnicity.value}>
                                        {ethnicity.text}
                                    </MenuItem>
                                ))}
                            </TextField>
                            <Button variant="contained" color="primary" type="submit" fullWidth>Next</Button>
                            <Button variant="contained" color="orange" type="button" onClick={() => goBack()} style={{ 'margin-top': '10px' }} fullWidth>Back</Button>
                            {error && <Alert severity="error">{error}</Alert>}
                        </form>
                    </div>
            )}
        </Container>
    );
};

export default SurveyComponent;
