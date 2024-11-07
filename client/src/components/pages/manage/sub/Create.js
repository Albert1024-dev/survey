import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import DeleteIcon from '@mui/icons-material/Delete';
import Stack from '@mui/material/Stack';
import Swal from 'sweetalert2';
import ButtonGroup from '@mui/material/ButtonGroup';
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router';

import axios from 'axios';
import config from '../../../../config/config';
import { toast } from 'react-toastify';

export default function Create() {
    const navigate = useNavigate();
    useEffect(() => {
        const token = localStorage.getItem('authToken');
        axios.defaults.headers.common['Authorization'] = token;
    }, []);
    
    const [title, setTitle] = useState("");

    const onTitleChange = (e) => {
        setTitle(e.target.value);
    }

    const [subquestionsFirst, setSubquestionsFirst] = useState([{ id: Date.now(), text: '' }]);
    const [subquestionsSecond, setSubquestionsSecond] = useState([{ id: Date.now(), text: '' }]);
    const [subquestionsThird, setSubquestionsThird] = useState([{ id: Date.now(), text: '' }]);

    // Function to add a new subquestion
    const handleAddSubquestionFirst = () => {
        setSubquestionsFirst([...subquestionsFirst, { id: Date.now(), text: '' }]);
    };
    const handleAddSubquestionSecond = () => {
        setSubquestionsSecond([...subquestionsSecond, { id: Date.now(), text: '' }]);
    };
    const handleAddSubquestionThird = () => {
        setSubquestionsThird([...subquestionsThird, { id: Date.now(), text: '' }]);
    };

    // Function to handle subquestion input change
    const handleSubquestionChangeFirst = (id, newText) => {
        setSubquestionsFirst(subquestionsFirst.map(q => (q.id === id ? { ...q, text: newText } : q)));
    };
    const handleSubquestionChangeSecond = (id, newText) => {
        setSubquestionsSecond(subquestionsSecond.map(q => (q.id === id ? { ...q, text: newText } : q)));
    };
    const handleSubquestionChangeThird = (id, newText) => {
        setSubquestionsThird(subquestionsThird.map(q => (q.id === id ? { ...q, text: newText } : q)));
    };

    // Function to delete a subquestion
    const handleDeleteSubquestionFirst = (id) => {
        Swal.fire({
                title: "Are you sure?",
                text: "You won't be able to revert this!",
                icon: "warning",
                showCancelButton: true,
                confirmButtonColor: "#3085d6",
                cancelButtonColor: "#d33",
                confirmButtonText: "Yes, delete it!"
        }).then((result) => {
                
            if (result.isConfirmed) {
                    if (subquestionsFirst.length > 1) {
                        setSubquestionsFirst(subquestionsFirst.filter(q => q.id !== id));
                        Swal.fire({
                            title: "Deleted!",
                            text: "Your file has been deleted.",
                            icon: "success"
                        });
                    } else {
                        Swal.fire({
                            title: "Warning!",
                            text: "You can't delete this because only one.",
                            icon: "warning"
                        });
                    }
                }
            });
    };
    const handleDeleteSubquestionSecond = (id) => {
        Swal.fire({
                title: "Are you sure?",
                text: "You won't be able to revert this!",
                icon: "warning",
                showCancelButton: true,
                confirmButtonColor: "#3085d6",
                cancelButtonColor: "#d33",
                confirmButtonText: "Yes, delete it!"
        }).then((result) => {
                
            if (result.isConfirmed) {
                    if (subquestionsSecond.length > 1) {
                        setSubquestionsSecond(subquestionsSecond.filter(q => q.id !== id));
                        Swal.fire({
                            title: "Deleted!",
                            text: "Your file has been deleted.",
                            icon: "success"
                        });
                    } else {
                        Swal.fire({
                            title: "Warning!",
                            text: "You can't delete this because only one.",
                            icon: "warning"
                        });
                    }
                }
            });
    };
    const handleDeleteSubquestionThird = (id) => {
        Swal.fire({
                title: "Are you sure?",
                text: "You won't be able to revert this!",
                icon: "warning",
                showCancelButton: true,
                confirmButtonColor: "#3085d6",
                cancelButtonColor: "#d33",
                confirmButtonText: "Yes, delete it!"
        }).then((result) => {
                
            if (result.isConfirmed) {
                    if (subquestionsThird.length > 1) {
                        setSubquestionsThird(subquestionsThird.filter(q => q.id !== id));
                        Swal.fire({
                            title: "Deleted!",
                            text: "Your file has been deleted.",
                            icon: "success"
                        });
                    } else {
                        Swal.fire({
                            title: "Warning!",
                            text: "You can't delete this because only one.",
                            icon: "warning"
                        });
                    }
                }
            });
    };

    const onCreate = () => {
        var first = [], second = [], third = [];
        for (let i = 0; i < subquestionsFirst.length; i++) {
            first.push(subquestionsFirst[i].text);
        }
        for (let i = 0; i < subquestionsSecond.length; i++) {
            second.push(subquestionsSecond[i].text);
        }
        for (let i = 0; i < subquestionsThird.length; i++) {
            third.push(subquestionsThird[i].text);
        }

        const sendData = {
            title: title,
            choices: [
                { value: 'A', text: first },
                { value: 'B', text: second },
                { value: 'C', text: third }
            ]
        };

        console.log(sendData);
        axios
            .post(`${config.serverURL}/api/question`, sendData)
            .then(response => {
                const data = response.data;
                toast(data.message, { type: data.type });
                if (data.status) {
                    setSubquestionsFirst([{ id: Date.now(), text: '' }]);
                    setSubquestionsSecond([{ id: Date.now(), text: '' }]);
                    setSubquestionsThird([{ id: Date.now(), text: '' }]);
                    setTitle('');
                }
        })
    }

    const onCancel = () => {
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, cancel this!"
        }).then((result) => {
            if (result.isConfirmed) {
                navigate('/');
            }
        });
    }

    return (
        <div style={{ 'textAlign': 'center', 'padding': '50px 0', 'backgroundColor': 'lightcyan' }}>
            <Box sx={{ width: 700, maxWidth: '100%', margin: 'auto' }}>
                <TextField
                    fullWidth
                    helperText="Input Title"
                    label="Title"
                    id="fullWidth"
                    onChange={(e) => { onTitleChange(e) }}
                />
                <hr />
                <br />
                
                <Box sx={{ width: 700, maxWidth: '100%' }}>
                    <div>
                        <div className="display-flex">
                            <Box sx={{ width: 100, maxWidth: '100%' }} style={{ 'textAlign': 'left', 'marginTop': 'auto', 'marginBottom': 'auto'}}>
                                First (A) :
                            </Box>
                            <Box sx={{ width: 600, maxWidth: '100%' }} className="first">
                                {subquestionsFirst.map((subquestion) => (
                                    <div key={subquestion.id} className="display-flex subquestion">
                                    <TextField
                                        fullWidth
                                        helperText="Input Subquestion"
                                        label="Subquestion"
                                        value={subquestion.text}
                                        onChange={(e) => handleSubquestionChangeFirst(subquestion.id, e.target.value)}
                                    />
                                    <Stack direction="row" spacing={2} style={{ height: '56px' }}>
                                        <Button variant="outlined" startIcon={<DeleteIcon />} onClick={() => handleDeleteSubquestionFirst(subquestion.id)}>
                                            Delete
                                        </Button>
                                    </Stack>
                                    </div>
                                ))}
                            </Box>
                        </div>
                        <Box sx={{ width: 700, maxWidth: '100%', textAlign: 'center', marginBottom: '20px' }} className="first">
                            <Button
                                variant="contained"
                                disableElevation
                                style={{ 'width': '200px', 'marginLeft': '100px', 'marginRight': 'auto' }}
                                onClick={handleAddSubquestionFirst}
                            >
                                Add
                            </Button>
                        </Box>
                    </div>
                    <div>
                        <div className="display-flex">
                            <Box sx={{ width: 100, maxWidth: '100%' }} style={{ 'textAlign': 'left', 'marginTop': 'auto', 'marginBottom': 'auto'}}>
                                Second (B) :
                            </Box>
                            <Box sx={{ width: 600, maxWidth: '100%' }} className="second">
                                {subquestionsSecond.map((subquestion) => (
                                    <div key={subquestion.id} className="display-flex subquestion">
                                    <TextField
                                        fullWidth
                                        helperText="Input Subquestion"
                                        label="Subquestion"
                                        value={subquestion.text}
                                        onChange={(e) => handleSubquestionChangeSecond(subquestion.id, e.target.value)}
                                    />
                                    <Stack direction="row" spacing={2} style={{ height: '56px' }}>
                                        <Button variant="outlined" startIcon={<DeleteIcon />} onClick={() => handleDeleteSubquestionSecond(subquestion.id)}>
                                            Delete
                                        </Button>
                                    </Stack>
                                    </div>
                                ))}
                            </Box>
                        </div>
                        <Box sx={{ width: 700, maxWidth: '100%', textAlign: 'center', marginBottom: '20px' }} className="first">
                            <Button variant="contained" disableElevation style={{ 'width': '200px', 'marginLeft': '100px', 'marginRight': 'auto'}} onClick={handleAddSubquestionSecond}>
                                Add
                            </Button>
                        </Box>
                    </div>
                    <div>
                        <div className="display-flex">
                            <Box sx={{ width: 100, maxWidth: '100%' }} style={{ 'textAlign': 'left', 'marginTop': 'auto', 'marginBottom': 'auto'}}>
                                Third (C) :
                            </Box>
                            <Box sx={{ width: 600, maxWidth: '100%' }} className="third">
                                {subquestionsThird.map((subquestion) => (
                                    <div key={subquestion.id} className="display-flex subquestion">
                                    <TextField
                                        fullWidth
                                        helperText="Input Subquestion"
                                        label="Subquestion"
                                        value={subquestion.text}
                                        onChange={(e) => handleSubquestionChangeThird(subquestion.id, e.target.value)}
                                    />
                                    <Stack direction="row" spacing={2} style={{ height: '56px' }}>
                                        <Button variant="outlined" startIcon={<DeleteIcon />} onClick={() => handleDeleteSubquestionThird(subquestion.id)}>
                                            Delete
                                        </Button>
                                    </Stack>
                                    </div>
                                ))}
                            </Box>
                        </div>
                        <Box sx={{ width: 700, maxWidth: '100%', textAlign: 'center', marginBottom: '20px' }} className="first">
                            <Button variant="contained" disableElevation style={{ 'width': '200px', 'marginLeft': '100px', 'marginRight': 'auto'}} onClick={handleAddSubquestionThird}>
                                Add
                            </Button>
                        </Box>
                    </div>
                </Box>
            </Box>
            <ButtonGroup
                disableElevation
                variant="contained"
                aria-label="Disabled button group"
                style={{ 'width': '400px', 'marginLeft': 'auto', 'marginRight': 'auto' }}
            >
                <Button style={{ width: '50%'}} color="success" onClick={onCreate}>Create</Button>
                <Button style={{ width: '50%'}} color="warning" onClick={onCancel}>Cancel</Button>
            </ButtonGroup>
        </div>
    );
};