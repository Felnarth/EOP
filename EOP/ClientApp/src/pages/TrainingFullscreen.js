import React, { useState, useEffect } from 'react';
import { DataGrid } from '@material-ui/data-grid';
import { Paper, AppBar, Tabs, Tab, Box, TextField, Grid, Button } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import SearchBar from 'material-ui-search-bar';
import PropTypes from 'prop-types';

const useStyles = makeStyles((theme) => ({
    root: {
        height: "90%",
        marginTop: "5px"
    },
    formRoot: {
        height:"95%"
    },
    tabPanel: {
        height: "100%"
    },
    gridRoot: {
        "&.MuiDataGrid-root": {
            height: "95%"
        }
    },
    gridRootHistory: {
        "&.MuiDataGrid-root": {
            height: "95%"
        }
    },
    searchBar: {
        height: "5%"
    },
    textGrid: {
        height:"5%"
    }
}));

function TabPanel(props) {
    const { children, value, index, ...other } = props;

    return (
        <div
            role="tabpanel"
            hidden={value !== index}
            id={`simple-tabpanel-${index}`}
            aria-labelledby={`simple-tab-${index}`}
            {...other}
        >
            {value === index && (
                <Box p={3} style={{ height: "100%", padding: "0px" }}>
                    {children}
                </Box>
            )}
        </div>
    );
}

TabPanel.propTypes = {
    children: PropTypes.node,
    index: PropTypes.any.isRequired,
    value: PropTypes.any.isRequired,
};

function a11yProps(index) {
    return {
        id: `simple-tab-${index}`,
        'aria-controls': `simple-tabpanel-${index}`,
    };
}

const HistoryForm = (props) => {
    const classes = useStyles();
    const [history, setHistory] = React.useState([]);
    const [rows, setRows] = React.useState([]);
    const b = useState(""), searched = b[0], setSearched = b[1];
    const [formValue, setFormValue] = useState("");
    const handleInputChange = (e) => {
        setFormValue(e.target.value);
    };

    function GetHistory() {
        const url = new URL(window.location.origin + "/api/Dashboard/GetHistory");
        const params = { uid: formValue };
        url.search = new URLSearchParams(params);

        fetch(url)
            .then(response => response.json())
            .then(data => {
                setHistory(data);
                setRows(data);
            })
    }

    const columns = [
        //{ field: 'id', headerName: 'ID', width: 70 },
        { field: 'courseCode', headerName: 'Course Code', width: 150 },
        { field: 'courseTitle', headerName: 'Course Title', width: 250 },
        { field: 'statusText', headerName: 'Status Text', width: 130 },
        { field: 'completeDate', headerName: 'Complete Date', width: 170 }
    ];

    const requestSearch = function (searchedVal) {
        const filteredRowsCode = history.filter(function (history) {
            return history.courseCode.toLowerCase().includes(searchedVal.toLowerCase());
        });
        const filteredRowsTitle = history.filter(function (history) {
            return history.courseTitle.toLowerCase().includes(searchedVal.toLowerCase());
        });
        setRows([...new Set([...filteredRowsCode, ...filteredRowsTitle])]);
    };
    const cancelSearch = function () {
        setSearched("");
        requestSearch(searched);
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        GetHistory(formValue);
        console.log(formValue);
    };

    return (
        <form onSubmit={handleSubmit} className={classes.formRoot}>
            <Grid container alignItems="center" justify="center" direction="row" spacing="1" className={classes.textRoot}>
                <Grid item>
                    <TextField
                        id="userId-input"
                        name="userId"
                        label="User ID"
                        type="text"
                        value={formValue}
                        onChange={handleInputChange}
                        size="small"
                    />
                </Grid>
                <Grid item>
                    <Button variant="contained" color="primary" type="submit">
                        Submit
                    </Button>
                </Grid>
            </Grid>
            <SearchBar
                value={searched}
                onChange={(searchVal) => requestSearch(searchVal)}
                onCancelSearch={() => cancelSearch()}
                className={classes.searchBar}
            />
            <DataGrid rows={rows} columns={columns} className={classes.gridRoot}/>
        </form>
    );
};

export default function TrainingFullscreen(props) {
    const classes = useStyles();
    const [courses, setCourses] = React.useState([]);
    const [rows, setRows] = React.useState([]);
    const b = useState(""), searched = b[0], setSearched = b[1];
    const [value, setValue] = React.useState(0);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    function GetCourses() {
        fetch('./api/Dashboard/GetCourses')
            .then(response => response.json())
            .then(data => {
                setCourses(data);
                setRows(data);
            })
    }

    useEffect(() => {
        //get courses
        GetCourses();
    }, [props.isStatic]);

    const columns = [
        //{ field: 'id', headerName: 'ID', width: 70 },
        { field: 'courseCode', headerName: 'Course Code', width: 150 },
        { field: 'courseTitle', headerName: 'Course Title', width: 250 },
        { field: 'statusText', headerName: 'Status Text', width: 130 },
        { field: 'courseDesc', headerName: 'Course Description', width: 250 },
        { field: 'availDate', headerName: 'Available Date', width: 170 },
        { field: 'content1', headerName: 'Content 1', width: 130 },
        { field: 'content2', headerName: 'Content 2', width: 130 }
    ];

    const requestSearch = function (searchedVal) {
        const filteredRowsCode = courses.filter(function (courses) {
            return courses.courseCode.toLowerCase().includes(searchedVal.toLowerCase());
        });
        const filteredRowsTitle = courses.filter(function (courses) {
            return courses.courseTitle.toLowerCase().includes(searchedVal.toLowerCase());
        });
        setRows([...new Set([...filteredRowsCode, ...filteredRowsTitle])]);
    };
    const cancelSearch = function () {
        setSearched("");
        requestSearch(searched);
    };

    return (
        <Paper className={classes.root}>
            <AppBar position="static">
                <Tabs value={value} onChange={handleChange} aria-label="simple tabs example">
                    <Tab label="Courses" {...a11yProps(0)} />
                    <Tab label="History" {...a11yProps(1)} />
                </Tabs>
            </AppBar>
            <TabPanel value={value} index={0} className={classes.tabPanel}>
                <SearchBar
                    value={searched}
                    onChange={(searchVal) => requestSearch(searchVal)}
                    onCancelSearch={() => cancelSearch()}
                    className={classes.searchBar}
                />
                <DataGrid rows={rows} columns={columns} className={classes.gridRoot}/>
            </TabPanel>
            <TabPanel value={value} index={1} className={classes.tabPanel}>
                {HistoryForm}
            </TabPanel>
        </Paper>
    );
};