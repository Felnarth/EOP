import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import { Box, Card, CardContent, CardHeader, FormControl, IconButton, Paper, Tab, Tabs, Typography } from '@material-ui/core';
import CloseIcon from '@material-ui/icons/Close';
import { Alert, AlertTitle } from '@material-ui/lab';

const useStyles = makeStyles((theme) => ({
    alert: {
        margin: '5px'
    },
    rootPaper: {
        height: '100%',
        marginTop: '5px'
    },
    root: {
        flexGrow: 1,
        backgroundColor: theme.palette.background.paper,
        display: 'flex',
        height: '100%'
    },
    tabs: {
        borderRight: `1px solid ${theme.palette.divider}`,
    },
}));

export default function NotificationFullscreen(props) {
    const classes = useStyles();

    useEffect(() => {
        //will have a fetch request to get 
    }, []);

    return (
        <Paper className={classes.rootPaper}>
            <VerticalTabs />
        </Paper>
    );
}

function TabPanel(props) {
    const { children, value, index, ...other } = props;

    return (
        <div
            role="tabpanel"
            hidden={value !== index}
            id={`vertical-tabpanel-${index}`}
            aria-labelledby={`vertical-tab-${index}`}
            style={{ width: "100%", overflowY: "auto" }}
            {...other}
        >
            {value === index && (
                <Box p={3}>
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
        id: `vertical-tab-${index}`,
        'aria-controls': `vertical-tabpanel-${index}`,
    };
}

function VerticalTabs() {
    const classes = useStyles();
    const [value, setValue] = React.useState(0);
    const [notifications, setNotifications] = React.useState([
        { id: 1, category: "toc", status: "active", title: "Test", text: "TOC active", severity: 0, timestamp: new Date(2021, 1, 12, 23, 30, 20) },
        { id: 2, category: "toc", status: "dismissed", title: "Test", text: "TOC Dismissed default", severity: 0, timestamp: new Date(2021, 1, 6, 10, 30, 20) },
        { id: 3, category: "custom", status: "active", title: "Test", text: "Custom notification", severity: 0, timestamp: new Date(2021, 1, 12, 10, 30, 20) },
        { id: 4, category: "toc", status: "active", title: "Test", text: "TOC active", severity: 0, timestamp: new Date(2021, 1, 22, 10, 30, 20) },
        { id: 5, category: "toc", status: "active", title: "Test", text: "TOC", severity: 0, timestamp: new Date(2021, 1, 12, 10, 30, 20) },
    ]);

    useEffect(() => {
        //setInterval(() => {
        //    setCounter((prev) => prev + 1);
        //}, 1000)
    }, []);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    const handleDismissal = (key) => {
        setNotifications((prev) => {
            const updateArray = [...prev];
            updateArray[prev.indexOf(prev.find(item => item.id == key))].status = "dismissed";
            return updateArray;
        });
    }

    return (
        <div className={classes.root}>
            <Tabs
                orientation="vertical"
                variant="scrollable"
                value={value}
                onChange={handleChange}
                aria-label="Vertical tabs example"
                className={classes.tabs}
            >
                <Tab label="Overview" {...a11yProps(0)} />
                <Tab label="TOC Calendar" {...a11yProps(1)} />
                <Tab label="Custom" {...a11yProps(2)} />
                <Tab label="History" {...a11yProps(3)} />
            </Tabs>
            <TabPanel value={value} index={0}>
                {notifications.map((item) => {
                    if (item.status !== "dismissed")
                        return (
                            <Alert
                                action={
                                    <IconButton
                                        aria-label="close"
                                        color="inherit"
                                        size="small"
                                        onClick={() => {
                                            handleDismissal(item.id);
                                        }}
                                    >
                                        <CloseIcon fontSize="inherit" />
                                    </IconButton>
                                }
                                severity="info" className={classes.alert} key={item.id}>
                                <AlertTitle>{item.title}</AlertTitle>
                                {item.text}
                            </Alert>
                        );
                })}
            </TabPanel>
            <TabPanel value={value} index={1}>
                {notifications.map((item) => {
                    if (item.category === "toc" && item.status !== "dismissed")
                        return (
                            <Alert severity="info" className={classes.alert} key={item.id}>
                                <AlertTitle>{item.title}</AlertTitle>
                                {item.text}
                            </Alert>
                        );
                })}
            </TabPanel>
            <TabPanel value={value} index={2}>
                {notifications.map((item) => {
                    if (item.category === "custom" && item.status !== "dismissed")
                        return (
                            <Alert severity="info" className={classes.alert} key={item.id}>
                                <AlertTitle>{item.title}</AlertTitle>
                                {item.text}
                            </Alert>
                        );
                })}
            </TabPanel>
            <TabPanel value={value} index={3}>
                {notifications.map((item) => {
                    if (item.status === "dismissed")
                        return (
                            <Alert severity="success" className={classes.alert} key={item.id}>
                                <AlertTitle>{item.title}</AlertTitle>
                                {item.text}
                            </Alert>
                        );
                })}
            </TabPanel>
        </div>
    );
}