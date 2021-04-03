import React, { useState, useEffect } from 'react';
import Board, { moveCard, addCard } from "@lourenci/react-kanban";
import { Button, Card, CardActions, CardContent, CardHeader, IconButton, TextField } from '@material-ui/core';
import SaveIcon from '@material-ui/icons/Save';
import ArchiveIcon from '@material-ui/icons/Archive';
import { makeStyles } from '@material-ui/core/styles';
import '../css/styles.css'

const useStyles = makeStyles({
    cardRoot: {
        height: "100%",
        minHeight: "800px"
    },
    cardContent: {
        textAlign: "center",
        paddingTop: "5px"
    },
    cardAction: {
        padding: "0px"
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
        const updatedBoard = moveCard(controlledBoard, source, destination);
        setBoard(updatedBoard);
    }

    const addNewCard = (e) => {

        const updatedBoard = addCard(controlledBoard, { id: 1 }, {
            id: 2,
            title: "Test Card Title",
            description: "Test Card Description"
        });
        setBoard({ ...updatedBoard });
    };

    return (
            <Card className={classes.cardRoot}>
                <Button onClick={addNewCard}>Add Card</Button>
                <Board
                    renderCard={({ id, content }, { removeCard, dragging }) => (
                    <TaskCard id={id} description={content.description} dueDate={content.dueDate} forField={content.forField} status={content.status} dragging={dragging} updateBoard={GetKanbanBoard}/>
                    )}
                    onCardDragEnd={handleCardMove}
                    disableColumnDrag
                >
                    {controlledBoard}
                </Board>
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
        }
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
                if (response.ok)
                    console.log("Success");
                    //TODO: snackbar notification
                else
                    throw response;
            })
            .catch(err => console.log(err));
        //TODO: snackbar notification
    }

    const archiveTask = () => {
        const url = new URL(window.location.origin + "/api/Dashboard/SetKanbanTaskArchived");
        const params = { id: props.id };
        url.search = new URLSearchParams(params);
        fetch(url)
            .then(res => {
                if (res.ok) {
                    //TODO: snackbar notification
                    props.updateBoard();
                }
                else
                    throw new Error("error");
            })
            .catch(err => {
                console.log(err);
                //TODO: snackbar notification
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
                    <IconButton aria-label="save" onClick={updateTask}>
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
                <TextField
                    id="dueDate"
                    label="Date"
                    value={dueDate}
                    onChange={handleChange}
                    size="small"
                />
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