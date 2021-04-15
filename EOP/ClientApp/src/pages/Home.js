import React, { useState, useEffect } from 'react';
import Fab from '@material-ui/core/Fab'
import { Snackbar } from '@material-ui/core';
import { Alert } from '@material-ui/lab';
import SaveIcon from '@material-ui/icons/Save';
import GridLayout from 'react-grid-layout';
import TOCWidget from '../components/TOCWidget';
import OrgWidget from '../components/OrgWidget';
import TrainingWidget from '../components/TrainingWidget';
import NotificationWidget from '../components/NotificationWidget';
import { makeStyles } from '@material-ui/core/styles';
import "../css/styles.css";

const useStyles = makeStyles({
    fabFixed: {
        position: 'fixed',
        right: '10px',
        bottom: '10px'
    }
});


export default function Home() {
    const classes = useStyles();

    const [isTOCWidgetStatic, setIsTOCWidgetStatic] = useState(true);
    const [isOrgWidgetStatic, setIsOrgWidgetStatic] = useState(true);
    const [isTrainingWidgetStatic, setIsTrainingWidgetStatic] = useState(true);
    const [isNotificationWidgetStatic, setIsNotificationWidgetStatic] = useState(true);

    const [isSnackbarOpen, setIsSnackbarOpen] = React.useState(false);
    const [snackbarText, setSnackbarText] = React.useState("");
    const [snackbarSeverity, setSnackbarSeverity] = React.useState("");

    const [layout, setLayout] = useState([]);

    //get notifciations fetch requests placed in function as it is called multiple times
    function getDashboard() {
        fetch('./api/Dashboard/GetDashboard')
            .then(response => response.json())
            .then(data => {
                setLayout(data.map((e) => {
                    return { i: e.divKey, x: e.xPos, y: e.yPos, w: e.width, h: e.height, minW: e.minWidth, static: true }
                }));
            });
    }

    useEffect(() => {
        getDashboard();
    }, []);

    function toggleWidgetStatic(layout, key) {
        console.log("set " + key + " to static");
        var newLayout = layout.map(l => {
            return { ...l, static: (l.i === key) ? !l.static : l.static }
        });

        switch (key) {
            case "a":
                setIsTOCWidgetStatic(!isTOCWidgetStatic);
                break;
            case "b":
                setIsOrgWidgetStatic(!isOrgWidgetStatic);
                break;
            case "c":
                setIsNotificationWidgetStatic(!isNotificationWidgetStatic);
                break;
            case "d":
                setIsTrainingWidgetStatic(!isTrainingWidgetStatic);
            default:
                break;
        }

        setLayout(newLayout);
    };

    function handleLayoutChange(layout) {
        setLayout(layout);
    };

    const handleSave = () => {
        let _data = layout.map((e) => {
            return { divKey: e.i, xPos: e.x, yPos: e.y, width: e.w, height: e.h, minWidth: e.minW }
        });

        fetch('./api/Dashboard/UpdateDashboard', {
            method: "POST",
            body: JSON.stringify(_data),
            headers: { "Content-Type": "application/json; charset=UTF-8" }
        })
            .then(response => {
                if (response.ok) {
                    setSnackbarText("Dashboard Saved");
                    setSnackbarSeverity("success");
                    setIsSnackbarOpen(true);
                }
                else
                    throw response;
            })
            .catch(err => {
                console.log(err);
                setSnackbarText("There was an error processing your request.");
                setSnackbarSeverity("error");
                setIsSnackbarOpen(true);
            });
    };

    const handleClose = (event, reason) => {
        if (reason === 'clickaway') {
            return;
        }

        setIsSnackbarOpen(false);
    };


    return (
        <div>
            <GridLayout className="layout" layout={layout} cols={16} rowHeight={30} width={1600} onLayoutChange={handleLayoutChange}>
                <div key="a">
                    <TOCWidget isStatic={isTOCWidgetStatic} toggleStatic={() => toggleWidgetStatic(layout, "a")} />
                </div>
                <div key="b">
                    <OrgWidget isStatic={isOrgWidgetStatic} toggleStatic={() => toggleWidgetStatic(layout, "b")} />
                </div>
                <div key="c">
                    <NotificationWidget isStatic={isNotificationWidgetStatic} toggleStatic={() => toggleWidgetStatic(layout, "c")} />
                </div>
                <div key="d">
                    <TrainingWidget isStatic={isTrainingWidgetStatic} toggleStatic={() => toggleWidgetStatic(layout, "d")} />
                </div>
            </GridLayout>
            <Fab color="primary" aria-label="save" onClick={handleSave} className={classes.fabFixed}>
                <SaveIcon />
            </Fab>
            <Snackbar open={isSnackbarOpen} autoHideDuration={6000} onClose={handleClose}>
                <Alert onClose={handleClose} severity={snackbarSeverity} variant="filled">
                    {snackbarText}
                </Alert>
            </Snackbar>
        </div>
    );
}
