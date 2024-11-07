import * as React from 'react';
import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TablePagination from '@mui/material/TablePagination';
import TableRow from '@mui/material/TableRow';

import { useState, useEffect } from 'react';
import axios from 'axios';
import config from '../../../../config/config';

export default function ViewResult() {
    const [surveyData, setSurveyData] = useState([]);
    useEffect(() => {
        axios
            .get(config.serverURL + '/api/survey')
            .then(result => {
                setSurveyData(result.data);
            });
    }, []);

    const [page, setPage] = useState(0);
    const [rowsPerPage, setRowsPerPage] = useState(10);

    const columns = [
        { id: 'id', label: 'Name', minWidth: 100 },
        { id: 'gender', label: 'Gender', minWidth: 50 },
        {
            id: 'birthday',
            label: 'Birthday',
            minWidth: 100,
            align: 'right'
        },
        {
            id: 'ethnicity',
            label: 'Ethnicity',
            minWidth: 50,
            format: (value) => value.toLocaleString()
        },
        {
            id: 'country',
            label: 'Country',
            minWidth: 100,
        },
        {
            id: 'region',
            label: 'Region',
            minWidth: 100
        },
        {
            id: 'city',
            label: 'City',
            minWidth: 70
        },
        {
            id: 'zipcode',
            label: 'Zip Code',
            minWidth: '60'
        },
        {
            id: 'ip',
            label: 'IP Address',
            minWidth: 80
        },
        {
            id: 'totalresult',
            label: 'Survey Result',
            align: 'right'
        }
    ];

    var rows = [];

    for (let i = 0; i < surveyData.length; i++) {
        var newRow = {
            // id: surveyData[i]._id,
            id: surveyData[i].fullName,
            gender: surveyData[i].gender,
            birthday: surveyData[i].birthday,
            ethnicity: surveyData[i].ethnicity,
            country: surveyData[i].location.country,
            region: surveyData[i].location.regionName,
            city: surveyData[i].location.city,
            zipcode: surveyData[i].location.zip,
            ip: surveyData[i].location.query,
            totalresult: surveyData[i].totalResult
        };

        rows.push(newRow);
    }

    const handleChangePage = (event, newPage) => {
        setPage(newPage);
    };

    const handleChangeRowsPerPage = (event) => {
        setRowsPerPage(+event.target.value);
        setPage(0);
    };

    return (
        <Paper sx={{ width: '100%', overflow: 'auto', marginTop: '100px', minHeight: 'calc(100vh - 100px)' }}>
            <TableContainer sx={{ maxHeight: '100%', marginTop: '50px' }}>
                <Table stickyHeader aria-label="sticky table">
                    <TableHead>
                        <TableRow>
                        {columns.map((column) => (
                            <TableCell
                                key={column.id}
                                align={column.align}
                                style={{ minWidth: column.minWidth }}
                            >
                                {column.label}
                            </TableCell>
                        ))}
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {rows
                            .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                            .map((row) => {
                                return (
                                <TableRow hover role="checkbox" tabIndex={-1} key={row.code}>
                                    {columns.map((column) => {
                                        const value = row[column.id];
                                        return (
                                            <TableCell key={column.id} align={column.align}>
                                                {column.format && typeof value === 'number'
                                                    ? column.format(value)
                                                    : value}
                                            </TableCell>
                                        );
                                    })}
                                </TableRow>
                            );
                        })}
                    </TableBody>
                </Table>
            </TableContainer>
            <TablePagination
                rowsPerPageOptions={[10, 25, 100]}
                component="div"
                count={rows.length}
                rowsPerPage={rowsPerPage}
                page={page}
                onPageChange={handleChangePage}
                onRowsPerPageChange={handleChangeRowsPerPage}
            />
        </Paper>
    );
}