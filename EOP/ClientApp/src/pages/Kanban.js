import React, { useState, useEffect } from 'react';
import Board, { moveCard, addCard } from "@lourenci/react-kanban";
import { Button, Card, CardActions, CardContent, CardHeader, Dialog, DialogActions, DialogContent, DialogTitle, IconButton, TextField, Snackbar } from '@material-ui/core';
import { Alert } from '@material-ui/lab';
import SaveIcon from '@material-ui/icons/Save';
import ArchiveIcon from '@material-ui/icons/Archive';
import DeleteIcon from '@material-ui/icons/Delete';
import UnarchiveIcon from '@material-ui/icons/Unarchive';
import { DataGrid } from '@material-ui/data-grid';
import SearchBar from 'material-ui-search-bar';
import { makeStyles } from '@material-ui/core/styles';
import moment from 'moment';
import DateFnsUtils from '@date-io/date-fns';
import {
    MuiPickersUtilsProvider,
    KeyboardDatePicker
} from '@material-ui/pickers';
import '../css/styles.css'

const useStyles = makeStyles({
    cardRoot: {
        minHeight: "800px",
        marginTop: "5px"
    },
    cardContent: {
        textAlign: "center"
    },
    cardAction: {
        padding: "0px"
    },
    cardActionTwo: {
        paddingBottom: "0px"
    },
    cardActionAvatar: {
        marginTop: "8px",
        marginRight: "8px"
    },
    dataGridRoot: {
        height: "90%"
    },
    dialogPaper: {
        width: "70%",
        maxWidth: "unset",
        height: "70%"
    },
    pickers: {
        margin: "0px"
    }
});

export default function Kanban() {
    const classes = useStyles();

    const [controlledBoard, setBoard] = useState({
        columns: [
            {
                id: 1,
                title: "Ready",
                cards: []
            },
            {
                id: 2,
                title: "Today",
                cards: []
            },
            {
                id: 3,
                title: "Doing",
                cards: []
            },
            {
                id: 4,
                title: "Waiting",
                cards: []
            },
            {
                id: 5,
                title: "Done",
                cards: []
            }
        ]
    });

    const [isSnackbarOpen, setIsSnackbarOpen] = React.useState(false);
    const [snackbarText, setSnackbarText] = React.useState("");
    const [snackbarSeverity, setSnackbarSeverity] = React.useState("");
    const [archiveOpen, setArchiveOpen] = React.useState(false);

    const handleArchiveClose = () => {
        setArchiveOpen(false);
        GetKanbanBoard();
    };

    const GetKanbanBoard = () => {
        fetch('./api/Dashboard/GetKanban')
            .then(response => response.json())
            .then(data => {
                setBoard({
                    columns: [
                        {
                            id: 1,
                            title: "Ready",
                            cards: data.filter(elem => elem.content.status === "Ready")
                        },
                        {
                            id: 2,
                            title: "Today",
                            cards: data.filter(elem => elem.content.status === "Today")
                        },
                        {
                            id: 3,
                            title: "Doing",
                            cards: data.filter(elem => elem.content.status === "Doing")
                        },
                        {
                            id: 4,
                            title: "Waiting",
                            cards: data.filter(elem => elem.content.status === "Waiting")
                        },
                        {
                            id: 5,
                            title: "Done",
                            cards: data.filter(elem => elem.content.status === "Done")
                        }
                    ]
                });
            });
    }

    useEffect(() => {
        GetKanbanBoard();
    }, []);

    function handleCardMove(_card, source, destination) {
        let column = "";

        switch (destination.toColumnId) {
            case 1:
                column = "Ready";
                break;
            case 2:
                column = "Today";
                break;
            case 3:
                column = "Doing";
                break;
            case 4:
                column = "Waiting";
                break;
            case 5:
                column = "Done";
                break;
            default:
                column = "";
                break;
        }

        const url = new URL(window.location.origin + "/api/Dashboard/SetTaskStatus");
        const params = { id: _card.id, status: column };
        url.search = new URLSearchParams(params);

        fetch(url)
            .then(response => {
                if (response.ok) {
                    
                }
                else
                    throw response;
            })
            .catch(err => {
                setSnackbarText("There was an error processing your request.");
                setSnackbarSeverity("error");
                setIsSnackbarOpen(true);
            })   
        const updatedBoard = moveCard(controlledBoard, source, destination);
        setBoard(updatedBoard);
    }

    const addNewCard = (e) => {
        fetch('./api/Dashboard/AddKanbanTask')
            .then(response => {
                if (!response.ok)
                    throw response;
                else
                    return response.json();
            })
            .then(data => {
                const updatedBoard = addCard(controlledBoard, { id: 1 }, {
                    id: data.id,
                    content: data.content
                });
                setBoard({ ...updatedBoard });
                setSnackbarText("Task updated");
                setSnackbarSeverity("success");
                setIsSnackbarOpen(true);
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
        <Card className={classes.cardRoot}>
            <CardHeader
                avatar={
                    <Button onClick={addNewCard} variant="contained" color="secondary">Add Card</Button>
                }
                action={
                    <Button onClick={() => setArchiveOpen(true)} variant="contained">View Archive</Button>
                }
                className={classes.cardActionTwo}
            />            
            <Board
                renderCard={({ id, content }, { removeCard, dragging }) => (
                    <TaskCard id={id} description={content.description} dueDate={content.dueDate} forField={content.forField} status={content.status} dragging={dragging} updateBoard={GetKanbanBoard} setIsSnackbarOpen={setIsSnackbarOpen} setSnackbarText={setSnackbarText} setSnackbarSeverity={setSnackbarSeverity}/>
                )}
                onCardDragEnd={handleCardMove}
                disableColumnDrag
            >
                {controlledBoard}
            </Board>
            <Snackbar open={isSnackbarOpen} autoHideDuration={6000} onClose={handleClose}>
                <Alert onClose={handleClose} severity={snackbarSeverity} variant="filled">
                    {snackbarText}
                </Alert>
            </Snackbar>
            <ArchivedKanban isOpen={archiveOpen} setClosed={handleArchiveClose}/>
        </Card>
    );
}

function TaskCard(props) {
    const classes = useStyles();
    const [description, setDescription] = useState("");
    const [dueDate, setDueDate] = useState("");
    const [forField, setForField] = useState("");

    useEffect(() => {
        setDescription(props.description);
        setDueDate(props.dueDate);
        setForField(props.forField);
    }, [props.description, props.dueDate, props.forField, props.status, props.dragging]);

    const handleChange = (e) => {

        switch (e.target.id) {
            case "description":
                setDescription(e.target.value);
                break;
            case "dueDate":
                setDueDate(e.target.value);
                break;
            case "forField":
                setForField(e.target.value);
                break;
            default:
                break;
        }
    };

    const handleDateChange = (date) => {
        setDueDate(date);
    };

    const updateTask = () => {

        let _data = {
            taskId: props.id,
            description: description,
            dueDate: new Date(dueDate),
            forField: forField,
            status: props.status
        }

        fetch('./api/Dashboard/UpdateKanbanTask', {
            method: "POST",
            body: JSON.stringify(_data),
            headers: { "Content-type": "application/json; charset=UTF-8" }
        })
            .then(response => {
                if (response.ok) {
                    props.setSnackbarText("Task updated");
                    props.setSnackbarSeverity("success");
                    props.setIsSnackbarOpen(true);
                }                    
                else
                    throw response;
            })
            .catch(err => {
                props.setSnackbarText("There was an error processing your request.");
                props.setSnackbarSeverity("error");
                props.setIsSnackbarOpen(true);
            });
    }

    const archiveTask = () => {
        const url = new URL(window.location.origin + "/api/Dashboard/SetKanbanTaskArchived");
        const params = { id: props.id };
        url.search = new URLSearchParams(params);
        fetch(url)
            .then(res => {
                if (res.ok) {
                    props.setSnackbarText("Task archived");
                    props.setSnackbarSeverity("success");
                    props.setIsSnackbarOpen(true);
                    props.updateBoard();
                }
                else
                    throw new Error("error");
            })
            .catch(err => {
                console.log(err);
                props.setSnackbarText("There was an error processing your request.");
                props.setSnackbarSeverity("error");
                props.setIsSnackbarOpen(true);
            })
    }

    return (
        <Card dragging={props.dragging}>
            <CardHeader
                avatar={
                    <IconButton area-label="archive" onClick={archiveTask}>
                        <ArchiveIcon />
                    </IconButton>
                }
                action={
                    <IconButton aria-label="save" onClick={updateTask} className={classes.cardActionAvatar}>
                        <SaveIcon />
                    </IconButton>
                }
                className={classes.cardAction}
            />
            <CardContent className={classes.cardContent}>
                <TextField
                    id="description"
                    multiline
                    rowsMax={4}
                    value={description}
                    onChange={handleChange}
                    fullWidth
                />
            </CardContent>
            <CardActions>
                <MuiPickersUtilsProvider utils={DateFnsUtils}>
                    <KeyboardDatePicker
                        disableToolbar
                        variant="inline"
                        format="MM/dd/yyyy"
                        margin="normal"
                        id="date-picker-inline"
                        label="Due Date"
                        value={dueDate}
                        onChange={handleDateChange}
                        KeyboardButtonProps={{
                            'aria-label': 'change date',
                        }}
                        className={classes.pickers}
                    />
                </MuiPickersUtilsProvider>
                <TextField
                    id="forField"
                    label="For"
                    value={forField}
                    onChange={handleChange}
                    size="small"
                />
            </CardActions>
        </Card>
        );
}

function ArchivedKanban(props) {
    const classes = useStyles()
    const [allTasks, setAllTasks] = React.useState([]);
    const [rows, setRows] = React.useState([]);
    const b = useState(""), searched = b[0], setSearched = b[1];
    const [isSnackbarOpen, setIsSnackbarOpen] = React.useState(false);
    const [snackbarText, setSnackbarText] = React.useState("");
    const [snackbarSeverity, setSnackbarSeverity] = React.useState("");

    const handleClose = (event, reason) => {
        if (reason === 'clickaway') {
            return;
        }

        setIsSnackbarOpen(false);
    };

    const GetArchive = () => {
        fetch('./api/dashboard/GetKanbanArchive')
            .then(response => {
                if (response.ok)
                    return response.json();
                else
                    throw response;
            })
            .then(data => {
                setAllTasks(data.map((elem) => (
                    {
                        ...elem,
                        dueDate: moment(data.dueDate).format('M/D/YY'),
                        id: elem.taskId
                    }
                )));
                setRows(data.map((elem) => (
                    {
                        ...elem,
                        dueDate: moment(data.dueDate).format('M/D/YY'),
                        id: elem.taskId
                    }
                )));
            })
            .catch(err => {
                setSnackbarText("There was an error processing your request.");
                setSnackbarSeverity("error");
                setIsSnackbarOpen(true);
            })
    }

    const SetUnarchived = (e) => {
        const url = new URL(window.location.origin + "/api/Dashboard/SetKanbanTaskUnArchived");
        const params = { id: e.currentTarget.id };
        url.search = new URLSearchParams(params);
        fetch(url)
            .then(response => {
                if (response.ok) {
                    setSnackbarText("Task Unarchived");
                    setSnackbarSeverity("success");
                    setIsSnackbarOpen(true);
                    GetArchive();
                }
                else
                    throw response;
            })
            .catch(err => {
                setSnackbarText("There was an error processing your request.");
                setSnackbarSeverity("error");
                setIsSnackbarOpen(true);
            })
    }

    const DeleteTask = (e) => {
        const url = new URL(window.location.origin + "/api/Dashboard/DeleteKanbanTask");
        const params = { id: e.currentTarget.id };
        url.search = new URLSearchParams(params);
        fetch(url)
            .then(response => {
                if (response.ok) {
                    setSnackbarText("Task Deleted");
                    setSnackbarSeverity("success");
                    setIsSnackbarOpen(true);
                    GetArchive();
                }
                else
                    throw response;
            })
            .catch(err => {
                setSnackbarText("There was an error processing your request.");
                setSnackbarSeverity("error");
                setIsSnackbarOpen(true);
            })
    }

    useEffect(() => {
        GetArchive();
    }, [props.isOpen]);

    const columns = [
        //{ field: 'taskId', headerName: 'Id', width: 150 },
        { field: 'description', headerName: 'Description', flex: 2 },
        { field: 'dueDate', headerName: 'Due Date', type: 'date', flex: 1 },
        { field: 'forField', headerName: 'For', flex: 1 },
        {
            field: 'unarchive',
            headerName: 'Un-Archive',
            flex: 1,
            renderCell: (params) => (
                <Button variant="contained" onClick={SetUnarchived} id={params.id}><UnarchiveIcon /></Button>
            )
        },
        {
            field: 'delete',
            headerName: 'delete',
            flex: 1,
            renderCell: (params) => (
                <Button variant="contained" onClick={DeleteTask} id={params.id}><DeleteIcon /></Button>
            )
        }
    ];

    const requestSearch = function (searchedVal) {
        const filteredRowsDescription = allTasks.filter(function (e) {
            return e.description.toLowerCase().includes(searchedVal.toLowerCase());
        });
        const filteredRowsForField = allTasks.filter(function (e) {
            return e.forField.toLowerCase().includes(searchedVal.toLowerCase());
        });
        setRows([...new Set([...filteredRowsDescription, ...filteredRowsForField])]);
    };

    const cancelSearch = function () {
        setSearched("");
        requestSearch(searched);
    };

    return (
        <Dialog open={props.isOpen} onClose={props.setClosed} classes={{ paper: classes.dialogPaper }}>
            <DialogTitle>Archived Kanban Board</DialogTitle>
            <DialogContent>
                <SearchBar
                    value={searched}
                    onChange={(searchVal) => requestSearch(searchVal)}
                    onCancelSearch={() => cancelSearch()}
                />
                <DataGrid rows={rows} columns={columns} pageSize={5} className={classes.dataGridRoot} />
                <Snackbar open={isSnackbarOpen} autoHideDuration={6000} onClose={handleClose}>
                    <Alert onClose={handleClose} severity={snackbarSeverity} variant="filled">
                        {snackbarText}
                    </Alert>
                </Snackbar>
            </DialogContent>
            <DialogActions>
                <Button onClick={props.setClosed}>Close</Button>
            </DialogActions>
        </Dialog>
    );
}