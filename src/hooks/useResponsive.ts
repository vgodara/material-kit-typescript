// @mui
import {useTheme} from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';
import {Breakpoint} from "@mui/material";
import {NonNull} from "../utils/helper";

// ----------------------------------------------------------------------


export default function useResponsive(queryType: 'up' | 'down' | 'only' | 'between', start: Breakpoint, end: Breakpoint | null = null): boolean {
    const theme = useTheme();
    return new NonNull(queryType as "up" | null).transform(() => new NonNull(theme.breakpoints.up(start)))?.transform(useMediaQuery) ??
        new NonNull(queryType as "down" | null).transform(() => new NonNull(theme.breakpoints.down(start)))?.transform(useMediaQuery) ??
        new NonNull(queryType as "only" | null).transform(() => new NonNull(theme.breakpoints.only(start)))?.transform(useMediaQuery) ??
        new NonNull(end).transform((end) => new NonNull(theme.breakpoints.between(start, end)))?.transform(useMediaQuery) ?? false
}

// ----------------------------------------------------------------------
