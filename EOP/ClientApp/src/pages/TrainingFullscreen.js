import React, { useState } from 'react';
import { DataGrid } from '@material-ui/data-grid';
import { Paper } from '@material-ui/core';
import SearchBar from "material-ui-search-bar";

export default function TrainingFullscreen() {

    const columns = [
        { field: 'id', headerName: 'ID', width: 70 },
        { field: 'courseCode', headerName: 'Course Code', width: 150 },
        { field: 'courseTitle', headerName: 'Course Title', width: 250 },
        { field: 'statusText', headerName: 'Status Text', width: 130 },
        { field: 'courseDesc', headerName: 'Course Description', width: 300 },
        { field: 'availDate', headerName: 'Available Date', width: 150 },
        { field: 'content1', headerName: 'Content 1', width: 130 },
        { field: 'content2', headerName: 'Content 2', width: 130 }
    ];

    const originalRows = [
        { id: '1', courseCode: 'CSCI590', courseTitle: 'Capstone', statusText: 'Active', courseDesc: 'Applying accumulated knowledge', availDate: 'January 11 2021', content1: 'asdf', content2: 'qwerty' },
        { id: '2', courseCode: 'ITS315', courseTitle: 'Introduction to Networks', statusText: 'Active', courseDesc: 'Networking fundamentals', availDate: 'January 11 2021', content1: 'asdf', content2: 'qwerty' },
        { id: '3', courseCode: 'ITS350', courseTitle: 'Information Systems & Security', statusText: 'Active', courseDesc: 'Network security basics', availDate: 'January 11 2021', content1: 'asdf', content2: 'qwerty' },
        { id: '4', courseCode: 'CSCI515', courseTitle: 'Ethical Hacking', statusText: 'Inactive', courseDesc: 'Network penetration testing', availDate: 'March 15 2021', content1: 'asdf', content2: 'qwerty' },
        { id: '5', courseCode: 'ITS455', courseTitle: 'Digital Forensics & Investigations', statusText: 'Inactive', courseDesc: 'Digital forensics', availDate: 'March 15 2021', content1: 'asdf', content2: 'qwerty' },
        { id: '6', courseCode: 'BADM345', courseTitle: 'Business Communication', statusText: 'Archive', courseDesc: 'Communication for business', availDate: 'August 20 2020', content1: 'asdf', content2: 'qwerty' },
        { id: '7', courseCode: 'COMM190', courseTitle: 'Introduction to Communication', statusText: 'Archive', courseDesc: 'Communication basics', availDate: 'August 20 2020', content1: 'asdf', content2: 'qwerty' },
        { id: '8', courseCode: 'CSCI411', courseTitle: 'Operating Systems', statusText: 'Archive', courseDesc: 'Windows & Linux system modeling', availDate: 'August 20 2020', content1: 'asdf', content2: 'qwerty' },
        { id: '9', courseCode: 'CSCI520', courseTitle: 'Database Systems Design', statusText: 'Archive', courseDesc: 'Intro to database concepts and SQL', availDate: 'August 20 2020', content1: 'asdf', content2: 'qwerty' },
    ];

    var a = useState(originalRows), rows = a[0], setRows = a[1];
    var b = useState(""), searched = b[0], setSearched = b[1];
    var requestSearch = function (searchedVal) {
        var filteredRowsCode = originalRows.filter(function (row) {
            return row.courseCode.toLowerCase().includes(searchedVal.toLowerCase());
        });
        var filteredRowsTitle = originalRows.filter(function (row) {
            return row.courseTitle.toLowerCase().includes(searchedVal.toLowerCase());
        });
        setRows([...new Set([...filteredRowsCode, ...filteredRowsTitle])]);
    };
    var cancelSearch = function () {
        setSearched("");
        requestSearch(searched);
    };

    return (
        <Paper style={{ marginTop: '5px', height: "100%" }}>
            <SearchBar
                value={searched}
                onChange={(searchVal) => requestSearch(searchVal)}
                onCancelSearch={() => cancelSearch()}
            />
            <DataGrid rows={rows} columns={columns} />
        </Paper>
    );
}