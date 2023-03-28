import {Box} from "@mui/material";
import React, {forwardRef} from "react";
import {IconifyProps} from "./types";
import {Icon} from "@iconify/react";

const Iconify = forwardRef(({
                                icon,
                                width = 20,
                                color = 'inherit',
                                height,
                                sx,
                                ...other
                            }: IconifyProps, ref) => (
    <Box ref={ref} component={Icon} icon={icon} sx={{width: width, height: height??width, color: color, ...sx}} {...other} />
));
export default Iconify