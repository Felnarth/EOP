import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { AppBar, Box, Card, CardContent, Tab, Tabs, Toolbar, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

function TabPanel(props) {
    const { children, value, index, ...other } = props;

    return (
        <div
            role="tabpanel"
            hidden={value !== index}
            id={'simple-tabpanel-${index}'}
            aria-labelledby={'simple-tab-${index}'}
            {...other}
        >
            {value === index && (
                <Box p={3}>
                    <Typography>{children}</Typography>
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
        id: 'simple-tab-${index}',
        'aria-controls': 'simple-tabpanel-${index}',
    };
}

const useStyles = makeStyles((theme) => ({
    cardRoot: {
        height: "100%"
    },
    tabRoot: {
        flexGrow: 1,
        backgroundColor: theme.palette.background.paper,
    }
}));

export default function TOCWidget() {
    const classes = useStyles();

    const [tabNum, setTabNum] = useState(0);

    const handleTabSwitch = (event, newValue) => {
        setTabNum(newValue);
    };

    return (
        <Card variant="outlined" className={classes.cardRoot}>
            <CardContent>
                <div className={classes.tabRoot}>
                    <AppBar position="static">
                        <Toolbar>
                            <Tabs
                                value={tabNum}
                                onChange={handleTabSwitch}
                                aria-label="simple tabs example"
                                centered
                            >
                                <Tab label="Item One" {...a11yProps(0)} />
                                <Tab label="Item Two" {...a11yProps(1)} />
                                <Tab label="Item Three" {...a11yProps(2)} />
                            </Tabs>
                        </Toolbar>
                    </AppBar>
                    <TabPanel value={tabNum} index={0}>
                        Item One
                    </TabPanel>
                    <TabPanel value={tabNum} index={1}>
                        Item Two
                    </TabPanel>
                    <TabPanel value={tabNum} index={2}>
                            Item Three
                    </TabPanel>
                </div>
            </CardContent>
        </Card>
    );
}