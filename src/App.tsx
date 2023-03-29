import React from 'react';
import './App.css';
import ThemeProvider from "./theme";
import {StyledChart} from "./components/chart";
import ScrollToTop from "./components/scroll-to-top";


function App() {

    return (
        <ThemeProvider>
            <><ScrollToTop/>
                <StyledChart/>

            </>
        </ThemeProvider>
    )
}

export default App;
