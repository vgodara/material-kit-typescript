 interface CustomShadows {
    none: 'none',
    z1: string;
    z4: string;
    z8: string;
    z12: string;
    z16: string;
    z20: string;
    z24: string;
    primary: string;
    info: string;
    secondary: string;
    success: string;
    warning: string;
    error: string;
    card: string;
    dialog: string;
    dropdown: string;

}
export default CustomShadows
declare module "@mui/material" {

    interface Theme {
        customShadows: CustomShadows
    }

    interface ThemeOptions {
        customShadows: CustomShadows
    }

    interface TypeBackground {
        neutral: string
    }

    interface SimplePaletteColorOptions {
        lighter: string
        darker: string
    }

    interface PaletteColor {
        lighter: string
        darker: string
    }
}
