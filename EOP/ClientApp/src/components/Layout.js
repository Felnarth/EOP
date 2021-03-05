import React, { useState } from 'react';
import { createMuiTheme, MuiThemeProvider } from "@material-ui/core/styles";
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import CssBaseline from '@material-ui/core/CssBaseline';
import NavMenu from './NavMenu';

const useStyles = makeStyles((theme) => ({
    root: {
        height: "800px",
        maxWidth: "1600px"
    }
}));

export default function Layout(props) {

    const [darkState, setDarkState] = useState(false);
    const palletType = darkState ? "dark" : "light";

    const classes = useStyles();

    const darkTheme = createMuiTheme({
        palette: {
            type: palletType,
        }
    });

    const handleThemeChange = () => {
        setDarkState(!darkState);
    };

    return (
        <MuiThemeProvider theme={darkTheme}>
            <CssBaseline />
            <NavMenu darkState={darkState} changeTheme={handleThemeChange}/>
            <Container className={classes.root}>
                {props.children}
            </Container>
        </MuiThemeProvider>
    );
}
