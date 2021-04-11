import React, { useEffect } from 'react';
import moment from 'moment';
import { Calendar, momentLocalizer } from 'react-big-calendar';
import { makeStyles } from '@material-ui/core/styles';
import '../css/react-big-calendar.css'
import { Card, CardContent, CardHeader, IconButton, Typography } from '@material-ui/core';
import SyncIcon from '@material-ui/icons/Sync';
import TOCCustomToolbar from '../components/TOCCustomToolbar';
import TOCEventDialog from '../components/TOCEventDialog';

const localizer = momentLocalizer(moment);

const useStyles = makeStyles((theme) => ({
    cardRoot: {
        height: '100%',
        marginTop: '5px'
    },
    cardHeader: {
        height: '10%'
    },
    cardContent: {
        height: '90%'
    },
    title: {
        textAlign: "center"
    }
}));


export default function TOCFullscreen() {
    const classes = useStyles();
    const [currentTime, setCurrentTime] = React.useState(moment().format('h:mm A'));
    const [events, setEvents] = React.useState([]);
    const [isDialogOpen, setIsDialogOpen] = React.useState(false);
    const [dialogEventObj, setDialogEventObj] = React.useState();

    function GetEvents() {
        fetch('./api/Dashboard/GetEvents')
            .then(response => response.json())
            .then(data => {
                data.forEach(item => {
                    item.end = new Date(item.end);
                    item.start = new Date(item.start);
                });
                setEvents(data)
            })
            .then(setCurrentTime(moment().format('h:mm A')))
    }

    useEffect(() => {
        GetEvents();
        //schedule timer to execute fetch call on an interval
        //interavl: 15 minutes
        var timer = setTimeout(GetEvents(), 15 * 60 * 1000);
        return () => {
            //clear timeout if component unmounted
            clearTimeout(timer);
        };
    }, []);

    const handleClickOpen = (e) => {
        setDialogEventObj(e);
        setIsDialogOpen(true);
    };

    const handleClose = () => {
        setIsDialogOpen(false);
    };

    let components = {
        toolbar: TOCCustomToolbar
    };

    return (
        <Card variant="outlined" className={classes.cardRoot}>
            <CardHeader
                action={
                    <IconButton area-label="sync" onClick={GetEvents}>
                        <SyncIcon />
                        <Typography variant="caption">As of<br />{currentTime}</Typography>
                        <SyncIcon />
                    </IconButton>
                }
                title={
                    <Typography variant="h6" className={classes.title}>Time Off Calendar</Typography>
                }
                className={classes.cardHeader}
            />
            <CardContent className={classes.cardContent}>
                <Calendar
                    events={events}
                    localizer={localizer}
                    components={components}
                    onSelectEvent={handleClickOpen}
                />
            </CardContent>
            <TOCEventDialog isOpen={isDialogOpen} setClosed={handleClose} eventObj={dialogEventObj} />
        </Card>
    );
}