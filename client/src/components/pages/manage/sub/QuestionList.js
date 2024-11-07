import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import PropTypes from 'prop-types';
import Box from '@mui/material/Box';
import Collapse from '@mui/material/Collapse';
import IconButton from '@mui/material/IconButton';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Typography from '@mui/material/Typography';
import Paper from '@mui/material/Paper';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import Button from '@mui/material/Button';


import config from '../../../../config/config';

function QuestionList() {
    const navigate = useNavigate();
    const [questions, setQuestions] = useState([]);
    useEffect(() => {
        axios
            .get(config.serverURL + '/api/question')
            .then(result => {
                if (result.data.status) {
                    setQuestions(result.data.data);
                }
            });
    }, []);

    function createData(object) {
        var subQuestions = [];
        for (let i = 0; i < object.choices.length; i++) {
            for (let j = 0; j < object.choices[i].text.length; j++) {
                subQuestions.push({
                    subGroup: object.choices[i].value,
                    subQ: object.choices[i].text[j]
                });
            }
        }
        return {
            _id: object._id,
            name: object.name,
            title: object.title,
            history: subQuestions
        };
    }

    function onUpdate(data) {
        navigate(`/update/${data._id}`, { state: { data: data } });
    }

    function Row(props) {
        const { row } = props;
        const [open, setOpen] = React.useState(false);

        return (
            <React.Fragment>
                <TableRow sx={{ '& > *': { borderBottom: 'unset' } }}>
                    <TableCell>
                        <IconButton
                            aria-label="expand row"
                            size="small"
                            onClick={() => setOpen(!open)}
                        >
                            {open ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
                        </IconButton>
                    </TableCell>
                    <TableCell component="th" scope="row">
                        {row.name}
                    </TableCell>
                    <TableCell align="left">{row.title}</TableCell>
                    <TableCell align="right">
                        <Button variant="outlined" size="medium" onClick={() => onUpdate(row)}>
                            Update
                        </Button>
                    </TableCell>
                </TableRow>
                <TableRow>
                    <TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={6}>
                        <Collapse in={open} timeout="auto" unmountOnExit>
                            <Box sx={{ margin: 1 }}>
                                <Typography variant="h6" gutterBottom component="div">
                                    SubQuestions
                                </Typography>
                                <Table size="small" aria-label="purchases">
                                    <TableHead>
                                        <TableRow>
                                            <TableCell width="150px">Question Gruop</TableCell>
                                            <TableCell>Question Content</TableCell>
                                        </TableRow>
                                    </TableHead>
                                    <TableBody>
                                    {row.history.map((historyRow) => (
                                        <TableRow key={historyRow.subQ}>
                                            <TableCell component="th" scope="row">
                                                Sub Questions (Group {historyRow.subGroup})
                                            </TableCell>
                                            <TableCell>{historyRow.subQ}</TableCell>
                                        </TableRow>
                                    ))}
                                    </TableBody>
                                </Table>
                            </Box>
                        </Collapse>
                    </TableCell>
                </TableRow>

            </React.Fragment>
        );
    }

    Row.propTypes = {
        row: PropTypes.shape({
            _id: PropTypes.string.isRequired,
            name: PropTypes.string.isRequired,
            title: PropTypes.string.isRequired,
            history: PropTypes.arrayOf(
                PropTypes.shape({
                    subGroup: PropTypes.string.isRequired,
                    subQ: PropTypes.string.isRequired,
                }),
            ).isRequired,
        }).isRequired,
    };

    const rows = [];
    for (let i = 0; i < questions.length; i++) {
        rows.push(createData(questions[i]));
    }

    return (
        <TableContainer component={Paper} sx={{ backgroundColor: 'lightblue' }}>
            Questions
            <Table aria-label="collapsible table">
                <TableHead>
                    <TableRow>
                        <TableCell width="100px" />
                        <TableCell width="200px">Question Name</TableCell>
                        <TableCell align="left">Question Title</TableCell>
                        <TableCell align="right" width="200px">Question Manage</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                {rows.map((row) => (
                    <Row key={row._id} row={row} />
                ))}
                </TableBody>
            </Table>
        </TableContainer>
    );
};

export default QuestionList;