import {SxProps, Theme} from "@mui/material";
import React from "react";

type Variant = 'filled' | 'outlined' | 'ghost' | 'soft';

type Color = 'default' | 'primary' | 'secondary' | 'info' | 'success' | 'warning' | 'error'

type OwnerState = {
    variant: Variant,
    color: Color
}

export type StyledProps = {
    ownerState: OwnerState
}

export interface LabelProps {
    sx?: SxProps<Theme>
    endIcon?: React.ReactElement
    children: React.ReactNode
    startIcon?: React.ReactElement
    variant?: Variant
    color?: Color
}