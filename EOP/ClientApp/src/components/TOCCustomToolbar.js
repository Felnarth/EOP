import React from 'react';
import clsx from 'clsx';
import Toolbar from 'react-big-calendar/lib/Toolbar';
import { AppBar, Button, ButtonGroup, Toolbar as MUIToolbar, Typography } from '@material-ui/core';
import { withStyles } from "@material-ui/core/styles";

let messages = {
    date: 'Date',
    time: 'Time',
    event: 'Event',
    allDay: 'All Day',
    week: 'Week',
    work_week: 'Work Week',
    day: 'Day',
    month: 'Month',
    previous: 'Back',
    next: 'Next',
    yesterday: 'Yesterday',
    tomorrow: 'Tomorrow',
    today: 'Today',
    agenda: 'Agenda',

    noEventsInRange: 'There are no events in this range.',

    showMore: total => `+${total} more`,
}

const styles = theme => ({
    toolBar: {
        display: "flex",
        flexWrap: "wrap",
        justifyContent: "center",
        alignItems: "center",
        marginBottom: "10px"
    },
    toolBarLabel: {
        flexGrow: 1,
        padding: "0 10px",
        textAlign: "center"
    },
    navButtons: {
        background: 'radial-gradient(circle, rgba(242,234,7,1) 38%, rgba(230,211,11,1) 54%, rgba(245,240,6,1) 79%)',
        borderColor: 'black'
    },
    buttonText: {
        color: "black"
    }
});

class TOCCustomToolbar extends Toolbar {
    render() {
        const { classes } = this.props;
        return (
            <AppBar position="static">
                <MUIToolbar className={classes.toolbar}>
                    <ButtonGroup>
                        <Button type="button" onClick={() => this.navigate('TODAY')} className={classes.navButtons}>
                            <Typography variant="subtitle1" className={classes.buttonText}>
                                Today
                            </Typography>
                        </Button>
                        <Button type="button" onClick={() => this.navigate('PREV')} className={classes.navButtons}>
                            <Typography variant="subtitle1" className={classes.buttonText}>
                                Prev
                            </Typography>
                        </Button>
                        <Button type="button" onClick={() => this.navigate('NEXT')} className={classes.navButtons}>
                            <Typography variant="subtitle1" className={classes.buttonText}>
                                Next
                            </Typography>
                        </Button>
                    </ButtonGroup>
                    <Typography className={classes.toolBarLabel}>{this.props.label}</Typography>
                    <ButtonGroup className="rbc-btn-group">{this.viewNamesGroup(messages)}</ButtonGroup>
                 </MUIToolbar>
            </AppBar>
        );
    }

    viewNamesGroup(messages) {
        let viewNames = this.props.views
        const view = this.props.view
        const { classes } = this.props;

        if (viewNames.length > 1) {
            return viewNames.map(name => (
                <Button
                    type="button"
                    key={name}
                    className={classes.navButtons}
                    onClick={this.view.bind(null, name)}
                >
                    <Typography variant="subtitle1" className={classes.buttonText}>
                        {messages[name]}
                    </Typography>
                </Button>
            ))
        }
    }

    navigate = action => {
        console.log(action);

        this.props.onNavigate(action)
    }
}

export default withStyles(styles)(TOCCustomToolbar);