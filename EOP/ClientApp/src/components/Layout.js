import React, { useState } from 'react';
import { createMuiTheme, ThemeProvider } from "@material-ui/core/styles";
import Container from '@material-ui/core/Container';
import CssBaseline from '@material-ui/core/CssBaseline';
import NavMenu from './NavMenu';

export default function Layout(props) {

    const [darkState, setDarkState] = useState(false);
    const palletType = darkState ? "dark" : "light";

    const darkTheme = createMuiTheme({
        palette: {
            type: palletType,
        }
    });

    const handleThemeChange = () => {
        setDarkState(!darkState);
    };

    return (
        <ThemeProvider theme={darkTheme}>
            <CssBaseline />
            <NavMenu darkState={darkState} changeTheme={handleThemeChange}/>
            <Container>
                {props.children}
            </Container>
        </ThemeProvider>
    );
}
