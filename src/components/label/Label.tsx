import {LabelProps} from "./types";
import React, {forwardRef} from "react";
import {StyledLabel} from "./styles";
import {Box} from "@mui/material";


const Label = forwardRef(({sx, endIcon, children, startIcon, variant = 'soft', color = 'default'}: LabelProps, ref) => {
    const iconStyle = {
        width: 16,
        height: 16,
        '& svg, img': {width: 1, height: 1, objectFit: 'cover'},
    };
    return (<StyledLabel
        ownerState={{variant, color}}
        sx={{
            ...(startIcon && {pl: 0.75}),
            ...(endIcon && {pr: 0.75}),
            ...sx
        }}>
        {startIcon && <Box sx={{mr: 0.75, ...iconStyle}}>{startIcon}</Box>}
        {children}
        {endIcon && <Box sx={{ml: 0.75, ...iconStyle}}>{endIcon}</Box>}

    </StyledLabel>)
})
export default Label