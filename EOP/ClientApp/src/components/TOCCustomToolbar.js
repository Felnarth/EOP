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
    }
});

class TOCCustomToolbar extends Toolbar {
    render() {
        const { classes } = this.props;
        return (
            <AppBar position="static">
                <MUIToolbar classNames={classes.toolbar}>
                    <ButtonGroup>
                        <Button type="button" onClick={() => this.navigate('TODAY')} >
                            <Typography variant="subtitle1" style={{ color: "white" }}>
                                Today
                            </Typography>
                        </Button>
                        <Button type="button" onClick={() => this.navigate('PREV')}>
                            <Typography variant="subtitle1" style={{ color: "white" }}>
                                Prev
                            </Typography>
                        </Button>
                        <Button type="button" onClick={() => this.navigate('NEXT')}>
                            <Typography variant="subtitle1" style={{ color: "white" }}>
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

        if (viewNames.length > 1) {
            return viewNames.map(name => (
                <Button
                    type="button"
                    key={name}
                    className={clsx({ 'rbc-active': view === name })}
                    onClick={this.view.bind(null, name)}
                >
                    <Typography variant="subtitle1" style={{ color: "white" }}>
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