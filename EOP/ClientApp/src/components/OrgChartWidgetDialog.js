import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { DialogTitle, Dialog, DialogActions, DialogContent, Button } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import OrganizationChart from "@dabeng/react-orgchart";

const ds = {
    id: "n1", //userId
    name: "Tom Brown", //fullname
    title: "general manager", //org title
    children: [ //members
        { id: "n2", name: "Lind Mill", title: "department manager" },
        {
            id: "n3", name: "Cindy Simms", title: "department manager",
            children: [
                { id: "n4", name: "Tia Sunny", title: "senior engineer" },
                {
                    id: "n5", name: "Kyle Kyleson", title: "senior engineer",
                    children: [
                        { id: "n6", name: "Dan Dan", title: "engineer" },
                        { id: "n7", name: "Bob Bob", title: "engineer" }
                    ]
                },
                { id: "n8", name: "Jeffer Jefferson", title: "senior engineer" }
            ]
        },
        { id: "n9", name: "Billy Joel", title: "department manager" },
        {
            id: "n10", name: "Sarah Williams", title: "department manager",
            children: [
                { id: "n11", name: "Cristina", title: "senior engineer" }
            ]
        }
    ]
};

const useStyles = makeStyles({
    dialogPaper: {
        width: "70%",
        maxWidth: "fit-content"
    }
});

export default function OrgChartWidgetDialog(props) {
    const classes = useStyles();

    useEffect(() => {
        //fetch call goes here
    }, [props.isOpen]);

    return (
        <Dialog onClose={props.setClosed} aria-labelledby="simple-dialog-title" open={props.isOpen} classes={{ paper: classes.dialogPaper }}>
            <DialogTitle id="simple-dialog-title">OrgName Here</DialogTitle>
            <DialogContent>
                <OrganizationChart datasource={ds} pan={true} zoom={true} />
            </DialogContent>
            <DialogActions>
                <Button onClick={props.setClosed}>Close</Button>
            </DialogActions>
        </Dialog>
    );
}

OrgChartWidgetDialog.propTypes = {
    onClose: PropTypes.func.isRequired,
    open: PropTypes.bool.isRequired,
};