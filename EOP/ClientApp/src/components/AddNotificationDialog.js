import React, { useEffect } from 'react';
import { Button, Dialog, DialogActions, DialogContent, DialogTitle, Grid, TextField } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import {
    MuiPickersUtilsProvider
} from '@material-ui/pickers';
import DateFnsUtils from '@date-io/date-fns';
import { DateTimePicker } from "@material-ui/pickers";

const useStyles = makeStyles((theme) => ({

}));

export default function AddNotificationDialog(props) {
    const classes = useStyles();

    const [text, setText] = React.useState("");
    const [title, setTitle] = React.useState("");
    const [selectedDate, handleDateChange] = React.useState(new Date());

    useEffect(() => {

    }, [props.isOpen]);

    const handleChange = (e) => {

        switch (e.target.id) {
            case "title":
                setTitle(e.target.value);
                break;
            case "text":
                setText(e.target.value);
                break;
            default:
                break;
        }
    };

    const submit = () => {
        let _data = {
            id: 1,
            category: "custom",
            status: "active",
            title: title,
            text: text,
            severity: 0,
            dateToFire: selectedDate
        }

        fetch('./api/DashBoard/AddNotification', {
            method: "POST",
            body: JSON.stringify(_data),
            headers: { "Content-type": "application/json; charset=UTF-8" }
        })
            .then(response => {
                if (response.ok) {
                    props.setSnackbarText("Task updated");
                    props.setSnackbarSeverity("success");
                    props.setIsSnackbarOpen(true);
                    props.setClosed()
                }
                else
                    throw response;
            })
            .catch(err => {
                props.setSnackbarText("There was an error processing your request.");
                props.setSnackbarSeverity("error");
                props.setIsSnackbarOpen(true);
                props.setClosed()
            });
    }

    return (
        <Dialog open={props.isOpen} onClose={props.setClosed} classes={{ paper: classes.dialogPaper }}>
            <DialogTitle>Add Custom Notification</DialogTitle>
            <DialogContent>
                <Grid container spacing={2}>
                    <Grid item xs={12}>
                        <TextField
                            label="Title"
                            id="title"
                            multiline
                            rowsMax={4}
                            onChange={handleChange}
                            fullWidth
                        />
                    </Grid>
                    <Grid item xs={12}>
                        <TextField
                            label="Text"
                            id="text"
                            multiline
                            rowsMax={4}
                            onChange={handleChange}
                            fullWidth
                        />
                    </Grid>
                    <Grid item xs={12}>
                        <MuiPickersUtilsProvider utils={DateFnsUtils}>
                            <DateTimePicker
                                label="Date"
                                inputVariant="outlined"
                                value={selectedDate}
                                onChange={handleDateChange}
                            />
                        </MuiPickersUtilsProvider>
                    </Grid>
                </Grid>
            </DialogContent>
            <DialogActions>
                <Button onClick={submit}>Submit</Button>
                <Button onClick={props.setClosed}>Close</Button>
            </DialogActions>
        </Dialog>
    );
}