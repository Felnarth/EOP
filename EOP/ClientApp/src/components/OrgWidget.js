import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import OrganizationChart from "@dabeng/react-orgchart";
import { Card, CardContent, CardHeader, FormControl, IconButton, Typography } from '@material-ui/core';
import LockIcon from '@material-ui/icons/Lock';
import LockOpen from '@material-ui/icons/LockOpen';
import { makeStyles } from '@material-ui/core/styles';
import FullscreenIcon from '@material-ui/icons/Fullscreen';
import OrgChartWidgetDialog from '../components/OrgChartWidgetDialog';

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

    const [orgs, setOrgs] = React.useState(
        {
            id: "",
            name: "",
            children: []
        }
    );

    const [dialogObj, setDialogObj] = React.useState();

    function GetOrgs() {
        fetch('./api/Dashboard/GetOrgs')
            .then(response => response.json())
            .then(data => setOrgs(data))
    }

    useEffect(() => {
        //get orgs to populate orgchart
        GetOrgs();
    }, [props.isStatic]);

    const [isDialogOpen, setIsDialogOpen] = React.useState(false);

    const handleClickOpen = (e) => {
        setDialogObj(e);
        setIsDialogOpen(true);
    }

    const handleClose = () => {
        setIsDialogOpen(false);
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
                <OrganizationChart datasource={orgs} pan={true} zoom={false} onClickNode={handleClickOpen} containerClass="orgChartCustomClass" />
                <OrgChartWidgetDialog isOpen={isDialogOpen} setClosed={handleClose} obj={dialogObj}/>
            </CardContent>
        </Card>
    );
};