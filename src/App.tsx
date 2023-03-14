import React from 'react';
import './App.css';
import ThemeProvider from "./theme";
import {StyledChart} from "./components/chart";
import ScrollToTop from "./components/scroll-to-top";
import {Carousel} from "./components/carousel";
import {faker} from "@faker-js/faker";


function App() {

    return (
        <ThemeProvider>
            <><ScrollToTop/>
                <StyledChart/>
                <Carousel list={Array.from(Array(10).keys()).map(()=>(faker.image.image()))}/>
            </>
        </ThemeProvider>
    )
}

export default App;
