import React from 'react';
import './App.css';
import ThemeProvider from "./theme";
import {StyledChart} from "./components/chart";
import ScrollToTop from "./components/scroll-to-top";
import ProductBuyBox from "./sections/@dashboard/product/ProductBuyBox";


function App() {

    return (
        <ThemeProvider>
            <><ScrollToTop/>
                <StyledChart/>
              <ProductBuyBox/>
            </>
        </ThemeProvider>
    )
}

export default App;
