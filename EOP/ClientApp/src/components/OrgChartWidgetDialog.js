import React, { useEffect } from 'react';
import { DialogTitle, Dialog, DialogActions, DialogContent, Button } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import OrganizationChart from "@dabeng/react-orgchart";
import PersonDialog from '../components/PersonDialog';

const useStyles = makeStyles({
    dialogPaper: {
        //width: "70%",
        //maxWidth: "fit-content"
    }
});

export default function OrgChartWidgetDialog(props) {
    const classes = useStyles();
    const [dialogObj, setDialogObj] = React.useState();
    const [isDialogOpen, setIsDialogOpen] = React.useState(false);
    const handleClickOpen = (e) => {
        setDialogObj(e);
        setIsDialogOpen(true);
    }
    const handleClose = () => {
        setIsDialogOpen(false);
    };

    useEffect(() => {
        //get people to populate orgchart
        //GetPersons();
    }, [props.obj]);

    return (
        <Dialog onClose={props.setClosed} aria-labelledby="simple-dialog-title" fullWidth maxWidth='md' open={props.isOpen} classes={{ paper: classes.dialogPaper }}>
            <DialogTitle id="simple-dialog-title">{props?.obj?.id + " " + props?.obj?.name}</DialogTitle>
            <DialogContent>
                <OrganizationChart datasource={props?.obj?.manager} pan={true} zoom={true} collapsible={false} onClickNode={handleClickOpen}/>
                <PersonDialog isOpen={isDialogOpen} setClosed={handleClose} obj={dialogObj} />
            </DialogContent>
            <DialogActions>
                <Button onClick={props.setClosed}>Close</Button>
            </DialogActions>
        </Dialog>
    );
}