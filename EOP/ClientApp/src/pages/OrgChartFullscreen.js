import React, { useEffect } from 'react';
import OrganizationChart from "@dabeng/react-orgchart";
import { Paper } from '@material-ui/core';
import OrgChartWidgetDialog from '../components/OrgChartWidgetDialog';

export default function OrgChartFullscreen(props) {

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
        <Paper style={{ height: "90%" }}>
            <OrganizationChart datasource={orgs} pan={true} zoom={true} collapsible={false} onClickNode={handleClickOpen}/>
            <OrgChartWidgetDialog isOpen={isDialogOpen} setClosed={handleClose} obj={dialogObj}/>
        </Paper>
    );
}