import {IconProps} from "./types";
import {Box, Theme} from "@mui/material";
import Iconify from "../iconify";
import {alpha} from "@mui/material/styles";


export default function Icon({sx, checked, whiteColor}: IconProps) {
    const shadow = <Box sx={{
        width: 1,
        height: 1,
        opacity: .45,
        borderRadius: "50%",
        position: 'absolute',
        boxShadow: "4px 4px 8px 0 currentColor"
    }}/>
    const icon = <Iconify
        icon="eva:checkmark-fill"
        sx={{
            opacity: 0,
            ...(checked && {
                opacity: 1,
                color: (theme: Theme) => theme.palette.common.white,
                ...(whiteColor && {
                    color: (theme: Theme) => theme.palette.common.black
                })
            })
        }}/>
    return <Box
        sx={{
            width: 20,
            height: 20,
            display: 'flex',
            borderRadius: '50%',
            position: 'relative',
            alignItems: 'center',
            justifyContent: 'center',
            background: 'currentColor',
            transition: (theme) =>
                theme.transitions.create('all', {
                    duration: theme.transitions.duration.shortest,
                }),
            ...(checked && {
                transform: 'scale(1.4)',
            }),
            ...(whiteColor && {
                border: (theme) => `solid 1px ${theme.palette.divider}`,
                boxShadow: (theme) => `4px 4px 8px 0 ${alpha(theme.palette.grey[500], 0.24)}`,
            }),
            ...sx

        }}
    >
        {checked && shadow}
        {icon}
    </Box>
}