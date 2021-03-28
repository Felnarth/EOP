import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { DialogTitle, Dialog, DialogActions, DialogContent, Button } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
    dialogPaper: {
        
    }
});

export default function PersonDialog(props) {
    const classes = useStyles();

    const [persons, setPersons] = React.useState(
        {
            id: "",
            name: "",
            children: []
        }
    );

    useEffect(() => {
        //get people to populate orgchart
        //GetPersons();
    }, [props.obj]);

    return (
        <Dialog onClose={props.setClosed} aria-labelledby="simple-dialog-title" fullWidth maxWidth='sm' open={props.isOpen} classes={{ paper: classes.dialogPaper }}>
            <DialogTitle id="simple-dialog-title">{props?.obj?.name}</DialogTitle>
            <DialogContent>
                <p>ID: {props?.obj?.id}</p>
                <p>Title: {props?.obj?.title}</p>
                <p>Room Number: {props?.obj?.roomNumber}</p>
            </DialogContent>
            <DialogActions>
                <Button onClick={props.setClosed}>Close</Button>
            </DialogActions>
        </Dialog>
    );
}

PersonDialog.propTypes = {
    onClose: PropTypes.func.isRequired,
    open: PropTypes.bool.isRequired,
};