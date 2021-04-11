import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Card, CardContent, CardHeader, FormControl, IconButton, Typography } from '@material-ui/core';
import FullscreenIcon from '@material-ui/icons/Fullscreen';
import { makeStyles } from '@material-ui/core/styles';
import LockIcon from '@material-ui/icons/Lock';
import LockOpen from '@material-ui/icons/LockOpen';
import SyncIcon from '@material-ui/icons/Sync';
import { Calendar, momentLocalizer } from 'react-big-calendar';
import moment from 'moment';
import '../css/react-big-calendar.css'
import TOCCustomToolbar from './TOCCustomToolbar';
import TOCEventDialog from './TOCEventDialog';

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
    const [currentTime, setCurrentTime] = React.useState(moment().format('h:mm A'));
    const [events, setEvents] = React.useState([]);
    const [isDialogOpen, setIsDialogOpen] = React.useState(false);
    const [dialogEventObj, setDialogEventObj] = React.useState();

    //fetch request to get events
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
    }, [props.isStatic]);

    //handling event dialog opening
    //(whena an event is clicked, a dialog is opened)
    const handleClickOpen = (e) => {
        setDialogEventObj(e);
        setIsDialogOpen(true);
    };

    //handling event dialog closing
    const handleClose = () => {
        setIsDialogOpen(false);
    };

    //custom calendar components
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
                    <div>
                        <IconButton area-label="fullscreen">
                            <Link to="/EOP/TOCFullscreen"><FullscreenIcon /></Link>
                        </IconButton>
                        <IconButton area-label="sync" onClick={GetEvents}>
                            <SyncIcon />
                            <Typography variant="caption">As of<br />{currentTime}</Typography>
                            <SyncIcon />
                        </IconButton>
                    </div>
                }
                title={
                    <Typography variant="h6" className={classes.title}>Time Off Calendar Widget</Typography>
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