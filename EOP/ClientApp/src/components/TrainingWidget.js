import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Card, CardContent, CardHeader, FormControl, IconButton, Typography, AppBar, Tabs, Tab, Box} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import LockIcon from '@material-ui/icons/Lock';
import LockOpen from '@material-ui/icons/LockOpen';
import FullscreenIcon from '@material-ui/icons/Fullscreen';
import { DataGrid } from '@material-ui/data-grid';
import SearchBar from 'material-ui-search-bar';
import PropTypes from 'prop-types';


const useStyles = makeStyles((theme) => ({
    root: {
        height: "100%",
        flexGrow: 1
    },
    cardHeader: {
        height: "15%"
    },
    cardContent: {
        height: "80%",
        flexGrow: 1
    },
    title: {
        textAlign: "center"
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
                <Box p={3} height='89%' padding=''>
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

export default function TrainingTable(props) {
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
        { field: 'id', headerName: 'ID', width: 70 },
        { field: 'courseCode', headerName: 'Course Code', width: 130 },
        { field: 'courseTitle', headerName: 'Course Title', width: 250 },
        { field: 'statusText', headerName: 'Status Text', width: 130 },
        { field: 'courseDesc', headerName: 'Course Description', width: 250 },
        { field: 'availDate', headerName: 'Available Date', width: 150 },
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
        <Card variant="outlined" className={classes.root}>
            <CardHeader
                avatar={
                    <FormControl component="fieldset">
                        <IconButton area-label="lock" onClick={props.toggleStatic}>
                            {(props.isStatic) ? <LockIcon /> : <LockOpen />}
                        </IconButton>
                    </FormControl>
                }
                action={
                    <IconButton area-label="fullscreen">
                        <Link to="/EOP/TrainingFullscreen"><FullscreenIcon /></Link>
                    </IconButton>
                }
                title={
                    <Typography variant="h6" className={classes.title}>Training Widget</Typography>
                }
                className={classes.cardHeader}
            />
            <AppBar position="static">
                <Tabs value={value} onChange={handleChange} aria-label="simple tabs example">
                    <Tab label="Courses" {...a11yProps(0)} />
                    <Tab label="History" {...a11yProps(1)} />
                </Tabs>
            </AppBar>
            <TabPanel value={value} index={0} className={classes.root}>
                <CardContent className={classes.cardContent}>
                    <SearchBar
                        value={searched}
                        onChange={(searchVal) => requestSearch(searchVal)}
                        onCancelSearch={() => cancelSearch()}
                    />
                    <DataGrid rows={rows} columns={columns} pageSize={5} />
                </CardContent>
            </TabPanel>
            <TabPanel value={value} index={1}>
                Item Two
            </TabPanel>
        </Card>
    );
};