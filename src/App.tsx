import React from 'react';
import './App.css';
import ThemeProvider from "./theme";
import {StyledChart} from "./components/chart";
import ScrollToTop from "./components/scroll-to-top";
import Router from "./routes";


function App() {

    return (
        <ThemeProvider>
            <><ScrollToTop/>
                <StyledChart/>
                <Router/>
            </>
        </ThemeProvider>
    )
}

export default App;
