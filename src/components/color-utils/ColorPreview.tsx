import {forwardRef} from "react";
import {ColorPreviewProps} from "./types";
import {Box, Stack, Typography} from "@mui/material";
import {alpha} from "@mui/material/styles";


export const ColorPreview = forwardRef<unknown, ColorPreviewProps>(({sx, limit=3, colors, ...others}, ref) => {
    const showColor = colors.slice(0, limit);
    const moreColor = colors.length - limit;
    return <Stack component={'span'}
                  sx={{display: 'flex',flexDirection:'row',alignItems:'center',justifyContent:'flex-end'}}>
        {showColor.map(color => {
            return <Box key={color} component={'span'} sx={{
                height: 16,
                width: 16,
                ml: -0.75,
                border: (theme) => `solid 2px ${theme.palette.background.paper}`,
                boxShadow: (theme) => `inset -1px 1px 2px ${alpha(theme.palette.common.black, 0.24)}`,
                backgroundColor: color,
                borderRadius: "50%"
            }}></Box>
        })}
        {moreColor>0 && <Typography variant={'subtitle2'}>{`+${moreColor}`}</Typography> }
    </Stack>
})