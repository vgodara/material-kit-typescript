import {SxProps, Theme} from "@mui/material";

export interface ImageWithOverlayProps {
    overlayColor: (theme: Theme) => string
    src: string
    sx?: SxProps<Theme>
}