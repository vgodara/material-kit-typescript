import React from 'react';
import './App.css';
import ThemeProvider from "./theme";
import {StyledChart} from "./components/chart";
import ScrollToTop from "./components/scroll-to-top";
import {ProductBuyBox} from "./sections/@dashboard/product";
import {products} from "./temp/data";


function App() {

    return (
        <ThemeProvider>
            <><ScrollToTop/>
                <StyledChart/>
                <ProductBuyBox product={{totalReviews:Math.random()*100000,sellableUnit:Math.random()>0.5?0:10, rating:Math.random()*5, ...products[2]}}/>
            </>
        </ThemeProvider>
    )
}

export default App;
