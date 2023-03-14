import {alpha, Color, PaletteColorOptions, PaletteOptions} from "@mui/material";
import {nonNullOnly} from "../utils/helper";
import createPalette from "@mui/material/styles/createPalette";


const GREY: Partial<Color> = {
    50: '#FFFFFF',
    100: '#F9FAFB',
    200: '#F4F6F8',
    300: '#DFE3E8',
    400: '#C4CDD5',
    500: '#919EAB',
    600: '#637381',
    700: '#454F5B',
    800: '#212B36',
    900: '#161c24',
};

const PRIMARY: PaletteColorOptions = {
    lighter: '#D1E9FC',
    light: '#76B0F1',
    main: '#2065D1',
    dark: '#103996',
    darker: '#061B64',
    contrastText: GREY[50],
};

const SECONDARY: PaletteColorOptions = {
    lighter: '#D6E4FF',
    light: '#84A9FF',
    main: '#3366FF',
    dark: '#1939B7',
    darker: '#091A7A',
    contrastText: GREY[50],
};

const INFO: PaletteColorOptions = {
    lighter: '#D0F2FF',
    light: '#74CAFF',
    main: '#1890FF',
    dark: '#0C53B7',
    darker: '#04297A',
    contrastText: GREY[50],
};

const SUCCESS: PaletteColorOptions = {
    lighter: '#E9FCD4',
    light: '#AAF27F',
    main: '#54D62C',
    dark: '#229A16',
    darker: '#08660D',
    contrastText: GREY[800],
};

const WARNING: PaletteColorOptions = {
    lighter: '#FFF7CD',
    light: '#FFE16A',
    main: '#FFC107',
    dark: '#B78103',
    darker: '#7A4F01',
    contrastText: GREY[800],
};

const ERROR: PaletteColorOptions = {
    lighter: '#FFE7D9',
    light: '#FFA48D',
    main: '#FF4842',
    dark: '#B72136',
    darker: '#7A0C2E',
    contrastText: GREY[50],
};

export const paletteOptions: PaletteOptions = {
    primary: PRIMARY,
    secondary: SECONDARY,
    error: ERROR,
    warning: WARNING,
    info: INFO,
    success: SUCCESS,
    //mode ,
    //tonalOffset ,
    // contrastThreshold ,
    common: {black: '#000', white: '#fff'},
    grey: GREY,
    text: {
        primary: GREY[800],
        secondary: GREY[600],
        disabled: GREY[500],
    },
    divider: nonNullOnly(GREY[500], alpha, 0.24),
    action: {
        active: GREY[600],
        hover: nonNullOnly(GREY[500], alpha, 0.08),
        hoverOpacity: 0.08,
        selected: nonNullOnly(GREY[500], alpha, 0.16),
        // selectedOpacity: 1,
        disabled: nonNullOnly(GREY[500], alpha, 0.8),
        disabledOpacity: 0.48,
        disabledBackground: nonNullOnly(GREY[500], alpha, 0.24),
        focus: nonNullOnly(GREY[500], alpha, 0.24),
        // focusOpacity: 1,
        // activatedOpacity: 1
    },
    background: {
        paper: GREY[50],
        default: GREY[100],
        neutral: GREY[200],
    },
    //getContrastText ,
    //augmentColor ,
};


const palette = createPalette(paletteOptions)
export default palette
