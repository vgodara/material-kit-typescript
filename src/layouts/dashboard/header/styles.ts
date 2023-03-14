import {AppBar, FormControl, MenuItem, styled, Toolbar} from "@mui/material";
import {bgBlur} from "../../../utils/cssStyles";

const HEADER_MOBILE = 64;
const HEADER_DESKTOP = 92;
const NAV_WIDTH = 280;
export const StyledMenuItem = styled(MenuItem)(({theme}) => ({
    padding: theme.spacing(0, 3),
    borderStyle: 'dashed'

})) as typeof MenuItem


export const StyledFormControl = styled(FormControl)(({theme}) => ({
    top: 0,
    left: 0,
    zIndex: 99,
    width: '100%',
    display: 'flex',
    position: 'absolute',
    alignItems: 'center',
    flexDirection: 'row',
    padding: theme.spacing(0, 3),
    height: HEADER_MOBILE,
    boxShadow: theme.customShadows.z8,
    [theme.breakpoints.up('md')]: {
        height: HEADER_DESKTOP,
        padding: theme.spacing(0, 5),
    },
    ...bgBlur({ color: theme.palette.background.default }),

})) as typeof FormControl

export const StyledAppBar = styled(AppBar)(({theme}) => ({

    boxShadow: 'none',
    [theme.breakpoints.up('lg')]: {
        maxWidth: `calc(100% - ${NAV_WIDTH}px)`
    },
    ...bgBlur({ color: theme.palette.background.default }),
})) as typeof AppBar

export const StyledToolbar = styled(Toolbar)(({theme}) => ({
    minHeight: HEADER_MOBILE,
    [theme.breakpoints.up('lg')]: {
        minHeight: HEADER_DESKTOP,
        padding: theme.spacing(0, 5),
    },
})) as typeof Toolbar