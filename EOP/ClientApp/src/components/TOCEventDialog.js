import React, { useEffect } from 'react';
import { Button, Dialog, DialogActions, DialogContent, DialogTitle } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import moment from 'moment';

const useStyles = makeStyles((theme) => ({
    dialogPaper: {
        width: "50%",
        height: "35%"
    }
}));

export default function TOCEventDialog(props) {
    const classes = useStyles();

    useEffect(() => {

    }, [props.isOpen, props.eventObj]);

    return (
        <Dialog open={props.isOpen} onClose={props.setClosed} classes={{ paper: classes.dialogPaper }}>
            <DialogTitle>{props?.eventObj?.title}</DialogTitle>
            <DialogContent>
                Start Date: {moment(props?.eventObj?.start).format('M/D/YY h:mm A')} <br /><br />
                End Date: {moment(props?.eventObj?.end).format('M/D/YY h:mm A')}
            </DialogContent>
            <DialogActions>
                <Button onClick={props.setClosed}>Close</Button>
            </DialogActions>
        </Dialog>
    );
}