import {forwardRef} from "react";
import {SvgColorProps} from "./types";
import {Box} from "@mui/material";


export const SvgColor = forwardRef<unknown, SvgColorProps>(({color, src, sx, ...other}, ref) => (
    <Box component={'span'}
         sx={{
             width: 24,
             height: 24,
             display:'inline-block',
             color:color,
             backgroundColor:'currentColor',
             mask:`url(${src}) no-repeat center/contain`,
             WebkitMask:`url(${src}) no-repeat center/contain`,
             ...sx
         }}
         {...other}
    />

))