import {SxProps, Theme} from "@mui/material";

export interface IconProps {
    sx?: SxProps<Theme>
    checked?: boolean
    whiteColor?: boolean
}

export interface ColorPreviewProps {
    sx?: SxProps<Theme>
    limit?: number
    colors: string[]
}

export interface ColorSinglePickerProps {
    colors: string[]
}

export interface ColorMultiPickerProps {
    colors: string[]
    onChangeColor: (color: string) => void
    selected: Set<string>
}