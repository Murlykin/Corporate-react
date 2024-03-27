import React, { useState } from "react";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import { Switch, } from "@mui/material"


const ThemeBar = () => {
    const [toggleDarkMode, setToggleDarkMode] = useState(true);
    const toggleDarkTheme = () => {
        setToggleDarkMode(!toggleDarkMode);
    };

    // applying the primary and secondary theme colors
    const darkTheme = createTheme({
        palette: {
            mode: toggleDarkMode ? 'dark' : 'light', // handle the dark mode state on toggle
            primary: {
                main: '#90caf9',
            },
            secondary: {
                main: '#131052',

            },
        },
    });
    return (
    <ThemeProvider theme={darkTheme}>
        <CssBaseline />
        <Switch checked={toggleDarkMode} onChange={toggleDarkTheme} />
    </ThemeProvider>
    );
};

export default ThemeBar;    