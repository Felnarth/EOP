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
    
    //const ds = {
    //    id: "E4000", 
    //    name: "ASDF Org", 
    //        children: [ 
    //        { id: "E4100", name: "QWERTY Org",
    //                children: [
    //                    { id: "E4110", name: "ZXCV Org"}
    //                ]
    //        },
    //        { id: "E4200", name: "YTREWQ Org",
    //            children: [
    //                { id: "E4210", name: "VBNM Org" },
    //                { id: "E4220", name: "MNBV Org" }
    //            ]
    //        }
    //    ]
    //};

    const handleClickOpen = (e) => {
        setIsDialogOpen(true);
    }

    const handleClose = () => {
        setIsDialogOpen(false);
    };

    return (
        <Paper style={{ height: "90%" }}>
            <OrganizationChart datasource={orgs} pan={true} zoom={true} onClickNode={handleClickOpen}/>
            <OrgChartWidgetDialog isOpen={isDialogOpen} setClosed={handleClose} />
        </Paper>
    );
}