import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ButtonGroup, Card, CardContent, CardHeader, Dialog, FormControl, IconButton, Typography } from '@material-ui/core';
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

    function GetEvents() {
        fetch('./api/Dashboard/GetEvents')
            .then(response => response.json())
            .then(data => setEvents(data))
            .then(setCurrentTime(moment().format('h:mm A')))
    }

    useEffect(() => {
        //get events to populate calendar
        GetEvents();
    }, [props.isStatic]);

    //const MyEvents = [
    //    {
    //        id: 0,                                      //ID
    //        userId: "j1023",                            //USERID
    //        title: "j1023" + " - " + "Long Vacation",   //EVENT_TITLE
    //        start: new Date(2021, 3, 5),                //EVENT_START
    //        end: new Date(2021, 3, 9),                  //EVENT_START
    //    }
    //];

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
                    <ButtonGroup>
                        <IconButton area-label="fullscreen">
                            <Link to="/EOP/TOCFullscreen"><FullscreenIcon /></Link>
                        </IconButton>
                        <IconButton area-label="sync" onClick={GetEvents}>
                            <SyncIcon />
                            <Typography variant="caption">As of<br />{currentTime}</Typography>
                            <SyncIcon />
                        </IconButton>
                    </ButtonGroup>
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
            <TOCEventDialog isOpen={isDialogOpen} setClosed={handleClose} eventObj={dialogEventObj}/>
        </Card>
    );
}