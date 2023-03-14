import React, {useMemo} from 'react';
// @mui
import {CssBaseline,} from '@mui/material';
import {createTheme, StyledEngineProvider, ThemeOptions, ThemeProvider as MUIThemeProvider} from '@mui/material/styles';
//
import paletteOptions from './paletteOptions';
import shadows from './shadows';
import typography from './typography';
import GlobalStyles from './globalStyles';
import customShadows from './customShadows';
import componentsOverride from './overrides';

export default function ThemeProvider({children}: { children: React.ReactNode }) {
    const themeOptions = useMemo<ThemeOptions>(
        () => ({
            palette: paletteOptions,
            shape: {borderRadius: 6},
            typography,
            shadows: shadows(),
            customShadows: customShadows(),
        }),
        []
    );

    const theme = createTheme(themeOptions);
    theme.components = componentsOverride(theme);

    return (
        <StyledEngineProvider injectFirst>
            <MUIThemeProvider theme={theme}>
                <CssBaseline/>
               { <GlobalStyles/>}
              <>  {children} </>
            </MUIThemeProvider>
        </StyledEngineProvider>
    );
}
