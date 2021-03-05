import React, { useState } from 'react';
import moment from 'moment';
import { Calendar, momentLocalizer } from 'react-big-calendar';
import { makeStyles } from '@material-ui/core/styles';
import '../css/react-big-calendar.css'
import { Paper } from '@material-ui/core';
import TOCCustomToolbar from '../components/TOCCustomToolbar';

const localizer = momentLocalizer(moment);

const useStyles = makeStyles((theme) => ({
    rootPaper: {
        height: '100%',
        marginTop: '5px'
    }
}));


export default function TOCFullscreen() {
    const classes = useStyles();

    const MyEvents = [
        {
            id: 0,
            title: 'All Day Event very long title',
            allDay: true,
            start: new Date(2021, 1, 23),
            end: new Date(2021, 1, 24),
        }
    ];

    let components = {
        toolbar: TOCCustomToolbar
    };

    return (
        <Paper className={classes.rootPaper}>
            <Calendar
                events={MyEvents}
                localizer={localizer}
                components={components}
            />
        </Paper>
    );
}