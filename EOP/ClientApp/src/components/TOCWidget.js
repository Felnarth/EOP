import React, { useState, useEffect } from 'react';
import { Card, CardContent, CardHeader, Checkbox, FormControl, FormControlLabel, IconButton, Tab, Tabs, Toolbar, Typography } from '@material-ui/core';
import FullscreenIcon from '@material-ui/icons/Fullscreen';
import { makeStyles } from '@material-ui/core/styles';
import { Calendar, momentLocalizer } from 'react-big-calendar';
import moment from 'moment';
import '../css/react-big-calendar.css'

const localizer = momentLocalizer(moment);

const useStyles = makeStyles((theme) => ({
    root: {
        height: "100%"
    },
    cardHeader: {
        height: "15%"
    },
    cardContent: {
        height: "85%"
    }
}));

export default function TOCWidget(props) {
    const classes = useStyles();

    useEffect(() => {
        //console.log(props.isStatic)
    }, [props.isStatic]);

    const MyEvents = [
        {
            id: 0,
            title: 'All Day Event very long title',
            allDay: true,
            start: new Date(2021, 1, 23),
            end: new Date(2021, 1, 24),
        }
    ];

    const handleNavClick = () => {
        //window.open("/TOCFullscreen");
        window.location.href = "/TOCFullscreen";
    }

    return (
        <Card variant="outlined" className={classes.root}>
            <CardHeader
                avatar={
                    <FormControl component="fieldset">
                        <FormControlLabel
                            control={
                                <Checkbox
                                    checked={props.isStatic}
                                    onChange={props.toggleStatic}
                                />
                            }
                            label="locked:"
                            labelPlacement="start"
                        />
                    </FormControl>
                }
                action={
                    <IconButton area-label="fullscreen" onClick={handleNavClick}>
                        <FullscreenIcon />
                    </IconButton>
                }
                className={classes.cardHeader}
            />
            <CardContent className={classes.cardContent}>
                <Calendar
                    events={MyEvents}
                    localizer={localizer}
                />
            </CardContent>
        </Card>
    );
}