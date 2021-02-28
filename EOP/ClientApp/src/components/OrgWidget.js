import React, { useState, useEffect } from 'react';
import OrganizationChart from "@dabeng/react-orgchart";
import { Card, CardContent, CardHeader, Checkbox, FormControl, FormControlLabel, IconButton} from '@material-ui/core';
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
        height: "100%"
    }
}));

export default function PanZoomChart(props){
    const classes = useStyles();

    useEffect(() => {
        //console.log(props.isStatic)
    }, [props.isStatic]);

    const handleNavClick = () => {
        //window.open("/OrgChartFullscreen");
        window.location.href = "/OrgChartFullscreen";
    }

    const ds = {
        id: "n1",
        name: "Lao Lao",
        title: "general manager",
        children: [
            { id: "n2", name: "Bo Miao", title: "department manager" },
            {
                id: "n3",
                name: "Su Miao",
                title: "department manager",
                children: [
                    { id: "n4", name: "Tie Hua", title: "senior engineer" },
                    {
                        id: "n5",
                        name: "Hei Hei",
                        title: "senior engineer",
                        children: [
                            { id: "n6", name: "Dan Dan", title: "engineer" },
                            { id: "n7", name: "Xiang Xiang", title: "engineer" }
                        ]
                    },
                    { id: "n8", name: "Pang Pang", title: "senior engineer" }
                ]
            },
            { id: "n9", name: "Hong Miao", title: "department manager" },
            {
                id: "n10",
                name: "Chun Miao",
                title: "department manager",
                children: [{ id: "n11", name: "Yue Yue", title: "senior engineer" }]
            }
        ]
    };

    return (
        <Card variant="outlined" className={classes.root}>
            <CardHeader
                avatar={
                    <FormControl component="fieldset">
                        <FormControlLabel
                            control={
                                <Checkbox
                                    checked={props.isStatic}
                                    onChange={props.toggleStatic}
                                />
                            }
                            label="locked:"
                            labelPlacement="start"
                        />
                    </FormControl>
                }
                action={
                    <IconButton area-label="fullscreen" onClick={handleNavClick}>
                        <FullscreenIcon />
                    </IconButton>
                }
                className={classes.cardHeader}
            />
            <CardContent className={classes.cardContent}>
                <OrganizationChart datasource={ds} pan={true} zoom={true} />
            </CardContent>


        </Card>
    );
};

