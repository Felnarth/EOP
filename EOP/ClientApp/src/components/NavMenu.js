import React, { useEffect } from 'react';
import { NavLink } from 'reactstrap';
import { Link } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import Switch from '@material-ui/core/Switch';

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    menuButton: {
        marginRight: theme.spacing(2),
    },
    title: {
        flexGrow: 1,
    },
}));

export default function NavMenu(props) {
    const classes = useStyles();

    useEffect(() => {
        //console.log(props.darkState);
    }, [props.darkState]);

    return (
        <AppBar position="static">
            <Toolbar>
                <Switch
                    checked={props.darkState}
                    onChange={props.changeTheme}
                />
                <Typography variant="h6" className={classes.title}>
                    Employee Oversight Portal
                </Typography>
                <Button >
                    <NavLink tag={Link} to="/EOP"><Typography variant="body1" style={{color: "white"}}>Home</Typography></NavLink>
                </Button>
                <Button >
                    <NavLink tag={Link} to="/EOP/Kanban"><Typography variant="body1" style={{ color: "white" }}>Kanban</Typography></NavLink>
                </Button>
            </Toolbar>
        </AppBar>
    );
}
