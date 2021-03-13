import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import OrganizationChart from "@dabeng/react-orgchart";
import { Card, CardContent, CardHeader, Checkbox, FormControl, FormControlLabel, IconButton, Typography } from '@material-ui/core';
import LockIcon from '@material-ui/icons/Lock';
import LockOpen from '@material-ui/icons/LockOpen';
import { makeStyles } from '@material-ui/core/styles';
import FullscreenIcon from '@material-ui/icons/Fullscreen';

const useStyles = makeStyles((theme) => ({
    root: {
        height: "100%"
    },
    cardHeader: {
        height: "15%"
    },
    cardContent: {
        height: "85%"
    },
    title: {
        textAlign: "center"
    }
}));

export default function PanZoomChart(props){
    const classes = useStyles();

    useEffect(() => {
        //console.log(props.isStatic)
    }, [props.isStatic]);

    const ds = {
        id: "n1",
        name: "Tom Brown",
        title: "general manager",
        children: [
            { id: "n2", name: "Lind Mill", title: "department manager" },
            {
                id: "n3",
                name: "Cindy Simms",
                title: "department manager",
                children: [
                    { id: "n4", name: "Tia Sunny", title: "senior engineer" },
                    {
                        id: "n5",
                        name: "Kyle Kyleson",
                        title: "senior engineer",
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
                id: "n10",
                name: "Sarah Williams",
                title: "department manager",
                children: [{ id: "n11", name: "Cristina", title: "senior engineer" }]
            }
        ]
    };

    OrganizationChart.zoomHandler = (ev) => {
        console.log("hello");
    }

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
                    <IconButton area-label="fullscreen">
                        <Link to="/EOP/OrgChartFullscreen"><FullscreenIcon /></Link>
                    </IconButton>
                }
                title={
                    <Typography variant="h6" className={classes.title}>Org Chart Widget</Typography>
                }
                className={classes.cardHeader}
            />
            <CardContent className={classes.cardContent}>
                <OrganizationChart datasource={ds} pan={true} zoom={true} containerClass="orgChartCustomClass"/>
            </CardContent>
        </Card>
    );
};