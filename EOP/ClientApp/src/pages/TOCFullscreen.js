import React, { useState } from 'react';
import moment from 'moment';
import { Calendar, momentLocalizer } from 'react-big-calendar';
import '../css/react-big-calendar.css'
import { Paper } from '@material-ui/core';

const localizer = momentLocalizer(moment);

export default function TOCFullscreen() {

    const MyEvents = [
        {
            id: 0,
            title: 'All Day Event very long title',
            allDay: true,
            start: new Date(2021, 1, 23),
            end: new Date(2021, 1, 24),
        }
    ];

    return (
        <Paper style={{ height: "100%" }}>
            <Calendar
                events={MyEvents}
                localizer={localizer}
            />
        </Paper>
    );
}