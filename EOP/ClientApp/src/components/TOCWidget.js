import React, { useState, useEffect } from 'react';
import { Card, CardContent, CardHeader, Checkbox, FormControl, FormControlLabel, IconButton, Tab, Tabs, Toolbar, Typography } from '@material-ui/core';
import FullscreenIcon from '@material-ui/icons/Fullscreen';
import { makeStyles } from '@material-ui/core/styles';
import LockIcon from '@material-ui/icons/Lock';
import LockOpen from '@material-ui/icons/LockOpen';
import { Calendar, momentLocalizer } from 'react-big-calendar';
import moment from 'moment';
import '../css/react-big-calendar.css'
import TOCCustomToolbar from './TOCCustomToolbar';

const localizer = momentLocalizer(moment);

const useStyles = makeStyles((theme) => ({
    root: {
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
    }
}));

export default function TOCWidget(props) {
    const classes = useStyles();

    useEffect(() => {
        //console.log(props.isStatic)
        //fetch request to get events from TOC calendar database
    }, [props.isStatic]);

    const MyEvents = [
        {
            id: 0,
            title: 'All Day Event very long title',
            allDay: true,
            start: new Date(2021, 2, 23),
            end: new Date(2021, 2, 24),
        }
    ];

    const handleNavClick = () => {
        window.location.href = "/EOP/TOCFullscreen";
    }

    let components = {
        toolbar: TOCCustomToolbar
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
                    <IconButton area-label="fullscreen" onClick={handleNavClick}>
                        <FullscreenIcon />
                    </IconButton>
                }
                title={
                    <Typography variant="h6" className={classes.title}>Time Off Calendar Widget</Typography>
                }
                className={classes.cardHeader}
            />
            <CardContent className={classes.cardContent}>
                <Calendar
                    events={MyEvents}
                    localizer={localizer}
                    components={components}
                />
            </CardContent>
        </Card>
    );
}