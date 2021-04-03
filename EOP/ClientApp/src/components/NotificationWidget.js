import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { Box, ButtonGroup, Card, CardContent, CardHeader, FormControl, IconButton, Snackbar, Tab, Tabs, Typography } from '@material-ui/core';
import { Alert, AlertTitle } from '@material-ui/lab';
import FullscreenIcon from '@material-ui/icons/Fullscreen';
import LockIcon from '@material-ui/icons/Lock';
import LockOpen from '@material-ui/icons/LockOpen';
import SyncIcon from '@material-ui/icons/Sync';
import CloseIcon from '@material-ui/icons/Close';
import RedoIcon from '@material-ui/icons/Redo';
import { makeStyles } from '@material-ui/core/styles';
import moment from 'moment';

const useStyles = makeStyles((theme) => ({
    alert: {
        margin: '5px'
    },
    cardRoot: {
        height: '100%'
    },
    cardHeader: {
        height: '15%'
    },
    cardContent: {
        height: '85%'
    },
    title: {
        textAlign: "center"
    },
    root: {
        flexGrow: 1,
        backgroundColor: theme.palette.background.paper,
        display: 'flex',
        height: '100%',
    },
    tabs: {
        borderRight: `1px solid ${theme.palette.divider}`,
    },
    message: {
        padding: '8px 0',
        width: "100%"
    }
}));

export default function NotificationWidget(props) {
    const classes = useStyles();
    const [currentTime, setCurrentTime] = React.useState();
    const [notifications, setNotifications] = React.useState([]);

    const [isSnackbarOpen, setIsSnackbarOpen] = React.useState(false);
    const [snackbarText, setSnackbarText] = React.useState("");
    const [snackbarSeverity, setSnackbarSeverity] = React.useState("");

    //get notifciations fetch requests placed in function as it is called multiple times
    function getNotifications() {
        fetch('./api/Dashboard/GetNotifications')
            .then(response => response.json())
            .then(data => setNotifications(data.sort(function (a, b) {
                //oldest at the top, newest at the bottom
                return new Date(a.dateFired) - new Date(b.dateFired);
            })))
            .then(setCurrentTime(moment().format('h:mm A')))
    }

    useEffect(() => {
        //get notifications to populate widget
        getNotifications();

        //set timer to refresh notifications
    }, [props.isStatic]);

    const handleNavClick = () => {
        window.location.href = "/EOP/NotificationFullscreen";
    }

    const handleDismissal = (key) => {
        //fetch request to change notification status to dismissed
        console.log(window.location);
        const url = new URL(window.location.origin + "/api/Dashboard/SetDismissed");
        const params = { id: JSON.stringify(key) };
        url.search = new URLSearchParams(params);
        fetch(url)
            .then(res => {
                if (res.ok) {
                    setSnackbarSeverity("success");
                    setSnackbarText("Notification dismissed!");
                    setIsSnackbarOpen(true);

                    //retrieve latest notifications
                    getNotifications();
                }
                else
                    throw new Error("error");
            })
            .catch(err => {
                setSnackbarSeverity("error");
                setSnackbarText("Server Error... Please try again or refresh the widget");
                setIsSnackbarOpen(true);
            })
    }

    //undo in this context means setting status of notification back to active
    const handleUndo = (key) => {
        //fetch request to change notification status to active
        console.log(window.location);
        const url = new URL(window.location.origin + "/api/Dashboard/SetActive");
        const params = { id: JSON.stringify(key) };
        url.search = new URLSearchParams(params);
        fetch(url)
            .then(res => {
                if (res.ok) {
                    setSnackbarSeverity("info");
                    setSnackbarText("Notification re-activated!");
                    setIsSnackbarOpen(true);

                    //retrieve latest notifications
                    getNotifications();
                }
                else
                    throw new Error("error");
            })
            .catch(err => {
                setSnackbarSeverity("error");
                setSnackbarText("Server Error... Please try again or refresh the widget");
                setIsSnackbarOpen(true);
            })
    }

    const handleClose = (event, reason) => {
        if (reason === 'clickaway') {
            return;
        }

        setIsSnackbarOpen(false);
    };

    return (
        <Card variant="outlined" className={classes.cardRoot}>
            <CardHeader
                avatar={
                    <FormControl component="fieldset">
                        <IconButton area-label="lock" onClick={props.toggleStatic}>
                            {(props.isStatic) ? <LockIcon /> : <LockOpen />}
                        </IconButton>
                    </FormControl>
                }
                action={
                    <ButtonGroup>
                        <IconButton area-label="fullscreen">
                            <Link to="/EOP/NotificationFullscreen"><FullscreenIcon /></Link>
                        </IconButton>
                        <IconButton area-label="sync" onClick={getNotifications}>
                            <SyncIcon />
                            <Typography variant="caption">As of<br />{currentTime}</Typography>
                            <SyncIcon />
                        </IconButton>
                    </ButtonGroup>
                }
                title={
                    <Typography variant="h6" className={classes.title}>Notifications</Typography>
                }
                className={classes.cardHeader}
            />
            <CardContent className={classes.cardContent}>
                <VerticalTabs notifications={notifications} dismissNotification={handleDismissal} undoDismissal={handleUndo} />
                <Snackbar open={isSnackbarOpen} autoHideDuration={6000} onClose={handleClose}>
                    <Alert onClose={handleClose} severity={snackbarSeverity} variant="filled">
                        {snackbarText}
                    </Alert>
                </Snackbar>
            </CardContent>
        </Card>
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

function AlertContent(props) {
    return (
        <div>
            <p style={{ float: "left" }}>{props.text}</p>
            <p style={{ float: "right" }}><i>{moment(props.dateFired).format('M/D/YY h:mm A')}</i></p>
        </div>
    );
}

function VerticalTabs(props) {
    const classes = useStyles();
    const [value, setValue] = React.useState(0);

    useEffect(() => {

    }, [props.notifications]);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    const handleDismissal = (key) => {
        props.dismissNotification(key);
    }

    const handleUndo = (key) => {
        props.undoDismissal(key);
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
                {props.notifications.map((item) => {
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
                                severity="info" className={classes.alert} key={item.id} classes={{ message: classes.message }}>
                                <AlertTitle>{item.title}</AlertTitle>
                                <AlertContent text={item.text} dateFired={item.dateFired} />
                            </Alert>
                        );
                })}
            </TabPanel>
            <TabPanel value={value} index={1}>
                {props.notifications.map((item) => {
                    if (item.category === "toc" && item.status !== "dismissed")
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
                                severity="info" className={classes.alert} key={item.id} classes={{ message: classes.message }}>
                                <AlertTitle>{item.title}</AlertTitle>
                                <AlertContent text={item.text} dateFired={item.dateFired} />
                            </Alert>
                        );
                })}
            </TabPanel>
            <TabPanel value={value} index={2}>
                {props.notifications.map((item) => {
                    if (item.category === "custom" && item.status !== "dismissed")
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
                                severity="info" className={classes.alert} key={item.id} classes={{ message: classes.message }}>
                                <AlertTitle>{item.title}</AlertTitle>
                                <AlertContent text={item.text} dateFired={item.dateFired} />
                            </Alert>
                        );
                })}
            </TabPanel>
            <TabPanel value={value} index={3}>
                {props.notifications.map((item) => {
                    if (item.status === "dismissed")
                        return (
                            <Alert
                                action={
                                    <IconButton
                                        aria-label="close"
                                        color="inherit"
                                        size="small"
                                        onClick={() => {
                                            handleUndo(item.id);
                                        }}
                                    >
                                        <RedoIcon fontSize="inherit" />
                                    </IconButton>
                                }
                                severity="success" className={classes.alert} key={item.id} classes={{ message: classes.message }}>
                                <AlertTitle>{item.title}</AlertTitle>
                                <AlertContent text={item.text} dateFired={item.dateFired} />
                            </Alert>
                        );
                })}
            </TabPanel>
        </div>
    );
}

